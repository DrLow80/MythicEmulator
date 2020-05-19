import {
  ISession,
  IScene,
  IQuestion,
  FateResult,
  IItem,
  randomNumber,
  FateTable,
  FateOdd,
  getAllItems,
  adjustChaos,
  generateRandomScene,
} from '../shared/content';
import { Guid } from 'guid-typescript';
export class SceneViewModel {
  active = 1;
  item: IItem;
  question: IQuestion;
  scene: IScene;

  constructor(public session: ISession, sceneId: string) {
    this.scene = this.session.scenes.find((n) => n.id === sceneId);
  }
  addItem(): void {
    this.item = {
      enabled: true,
      id: Guid.create().toString(),
      name: 'New Item',
      type: 'NPC',
      description: '',
    };
    this.scene.items.push(this.item);
  }
  addQuestion(): void {
    this.question = {
      content: '',
      description: '',
      fateResult: null,
    };
  }
  completedScene(value: number): void {
    this.session.chaos = adjustChaos(this.session.chaos, value);
    this.scene.completed = true;
  }
  getFateResult(value: FateOdd): void {
    const percentile = randomNumber(100, true);
    this.question.fateResult = this.randomFateResult(value, percentile);
    this.scene.questions.push(this.question);
    const result = this.checkPercentileCreatedRandomEvent(percentile);
    if (!result) {
      return;
    }
    const items = getAllItems(this.session);
    generateRandomScene(items, this.session);
  }
  randomFateResult(odd: FateOdd, percentile: number): FateResult {
    const value = FateTable[odd];
    const propbability = value[this.session.chaos];
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
    const value = 11 * this.session.chaos;
    const result = value >= percentile;
    return result;
  }
}
