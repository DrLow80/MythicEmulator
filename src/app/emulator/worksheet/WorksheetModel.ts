import { IWorksheetScene } from './interfaces';
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
import { NumberLimitModel } from './NumberLimitModel';
import { WorksheetItemList } from './WorksheetItemList';

export class WorksheetModel {
  chaos = new NumberLimitModel(5, 1, 9);
  index = -1;
  items = new WorksheetItemList();
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

  addQuestion(value: FateOdd, question: string): void {
    if (!question) return;

    if (!value) return;

    const percentile = this.randomNumber();

    const fateResult = this.randomFateResult(value, percentile);

    const q = {
      question,
      result: fateResult,
    };

    this.currentScene.questions.push(q);

    const result = this.checkPercentileCreatedRandomEvent(percentile);

    if (result) this.generateRandomScene();
  }

  back(): void {
    if (this.canBack) this.index -= 1;
  }

  checkPercentileCreatedRandomEvent(percentile: number): boolean {
    const remainder = percentile % 11;

    if (remainder !== 0) return false;

    const value = 11 * this.chaos.value;

    const result = value >= percentile;

    return result;
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
    let status = randomSceneStatus(this.chaos.value);

    let scene = this.createScene(status);

    this.scenes.push(scene);

    if (status === 'Interupt') {
      scene = this.createScene('Normal');

      this.scenes.push(scene);
    }
  }

  next(): void {
    if (this.doesNextIndexRequireCreatingANewScene) this.generateRandomScene();

    this.index += 1;
  }

  randomFateResult(odd: FateOdd, percentile: number): FateResult {
    const value = FateTable[odd];

    const propbability = value[this.chaos.value];

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

  randomNumber(): number {
    let value = Math.floor(Math.random() * 100);

    return value + 1;
  }

  selectScene(value: IWorksheetScene): void {
    const index = this.scenes.findIndex((x) => x.index == value.index);

    this.index = index;
  }
}
