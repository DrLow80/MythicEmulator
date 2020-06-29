import {
  IWorksheetItem,
  WorksheetItemType,
  IWorksheetScene,
} from './interfaces';
import {
  oneRandomThing,
  FateOdd,
  FateResult,
  FateTable,
  createRandomScene,
  randomSceneStatus,
  SceneStatus,
  randomNumber,
} from '../shared/content';
import {
  WorksheetFocuses,
  WorksheetSubjects,
  WorksheetActions,
} from './worksheet-view-model.service';

export class WorksheetModel {
  chaos = 5;
  index = -1;
  items: IWorksheetItem[] = [];
  scenes: IWorksheetScene[] = [];

  get canBack(): boolean {
    return this.index > 0;
  }

  get currentScene() {
    return this.scenes[this.index];
  }

  get doesNextIndexRequireCreatingANewScene(): boolean {
    return this.index === this.scenes.length - 1;
  }

  get enabledItems(): IWorksheetItem[] {
    return this.items.filter((x) => x.enabled);
  }

  get enabledNonPlayerCharacters(): IWorksheetItem[] {
    return this.filterItemsByTypeAndEnabled('NPC');
  }

  get enabledPlayerCharacters(): IWorksheetItem[] {
    return this.filterItemsByTypeAndEnabled('PC');
  }

  get enabledThreads(): IWorksheetItem[] {
    return this.filterItemsByTypeAndEnabled('Thread');
  }

  get nonPlayerCharacters(): IWorksheetItem[] {
    return this.filterItemsByType('NPC');
  }

  get playerCharacters(): IWorksheetItem[] {
    return this.filterItemsByType('PC');
  }

  get threads(): IWorksheetItem[] {
    return this.filterItemsByType('Thread');
  }

  addItem(name: string, type: WorksheetItemType) {
    const item: IWorksheetItem = {
      enabled: true,
      name,
      type,
    };

    this.items.push(item);
  }

  back(): void {
    if (this.canBack) {
      this.index -= 1;
    }
  }

  filterItemsByType(type: WorksheetItemType): IWorksheetItem[] {
    return this.items.filter((x) => x.type == type);
  }

  filterItemsByTypeAndEnabled(type: WorksheetItemType): IWorksheetItem[] {
    return this.filterItemsByType(type).filter((x) => x.enabled);
  }

  next(): void {
    if (this.doesNextIndexRequireCreatingANewScene) {
      this.generateRandomScene();
    }

    this.index += 1;
  }

  decreaseChaos(): void {
    if (this.chaos > 1) {
      this.chaos -= 1;
    }
  }

  increaseChaos(): void {
    if (this.chaos < 9) {
      this.chaos += 1;
    }
  }

  selectScene(value: IWorksheetScene): void {
    const index = this.scenes.findIndex((x) => x.index == value.index);

    this.index = index;
  }

  createScene(status: SceneStatus): IWorksheetScene {
    const focus = oneRandomThing(WorksheetFocuses);

    const item = focus.selectItem(this);

    const index = (this.scenes.length + 1).toString();

    const scene: IWorksheetScene = {
      index,
      focus: focus,
      subject: oneRandomThing(WorksheetSubjects),
      action: oneRandomThing(WorksheetActions),
      item: item,
      questions: [],
      status,
    };

    return scene;
  }

  generateRandomScene(): void {
    let status = randomSceneStatus(this.chaos);

    let scene = this.createScene(status);

    this.scenes.push(scene);

    if (status === 'Interupt') {
      scene = this.createScene('Normal');

      this.scenes.push(scene);
    }
  }

  randomNumber(): number {
    let value = Math.floor(Math.random() * 100);

    return value + 1;
  }

  addQuestion(value: FateOdd, question: string): void {
    const percentile = this.randomNumber();

    const q = {
      question,
      result: this.randomFateResult(value, percentile),
    };

    this.currentScene.questions.push(q);

    const result = this.checkPercentileCreatedRandomEvent(percentile);

    if (!result) {
      return;
    }

    this.generateRandomScene();
  }

  randomFateResult(odd: FateOdd, percentile: number): FateResult {
    const value = FateTable[odd];
    const propbability = value[this.chaos];
    if (percentile < propbability.exceptionalYes) {
      return 'Exceptional Yes';
    } else if (percentile < propbability.yes) {
      return 'Yes';
    } else if (percentile < propbability.no) {
      return 'No';
    } else {
      return 'Exceptional No';
    }
  }

  checkPercentileCreatedRandomEvent(percentile: number): boolean {
    const remainder = percentile % 11;
    if (remainder !== 0) {
      return false;
    }
    const value = 11 * this.chaos;
    const result = value >= percentile;
    return result;
  }
}
