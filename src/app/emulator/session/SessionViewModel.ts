import {
  IItem,
  ISession,
  ItemType,
  IScene,
  createItem,
  randomSceneStatus,
  createRandomScene,
} from '../shared/content';
export class SessionViewModel {
  constructor(public session: ISession) {}

  sceneCommands(value: IScene): string[] {
    const results = ['/emulator', this.session.id, 'scene', value.id];
    return results;
  }

  get allItems(): IItem[] {
    let items = this.session.items;
    this.session.scenes.forEach((scene) => {
      items = items.concat(scene.items);
    });
    const results = items.filter(
      (thing, i, arr) => arr.findIndex((t) => t.id === thing.id) === i
    );
    return results;
  }

  get nonPlayerCharacters(): IItem[] {
    const results = this.getItemsByType('NPC');
    return results;
  }

  get playerCharacters(): IItem[] {
    const results = this.getItemsByType('PC');
    return results;
  }

  get threads(): IItem[] {
    const results = this.getItemsByType('Thread');
    return results;
  }

  get sessionTitle(): string {
    if (!!this.session.title) {
      return this.session.title;
    } else {
      return 'Session';
    }
  }

  addItem(itemType: ItemType): IItem {
    const value: IItem = createItem(itemType);
    this.session.items.push(value);
    return value;
  }

  adjustChaos(value: number): void {
    this.session.chaos += value;
    if (this.session.chaos > 9) {
      this.session.chaos = 9;
    }
    if (this.session.chaos < 1) {
      this.session.chaos = 1;
    }
  }

  generateRandomScene(): IScene {
    const status = randomSceneStatus(this.session.chaos);
    const scene = createRandomScene(status, this.allItems);
    scene.title = 'Scene ' + (this.session.scenes.length + 1);
    this.session.scenes.push(scene);
    if (status === 'Interupt') {
      const interruptScene = createRandomScene('Normal', this.allItems);
      interruptScene.title = '*Scene ' + (this.session.scenes.length + 1);
      this.session.scenes.push(interruptScene);
    }
    return scene;
  }

  getItemsByType(itemType: ItemType): IItem[] {
    const items = this.allItems.filter((x) => x.type === itemType);
    return items;
  }

  itemCommands(value: IItem): string[] {
    const results: string[] = ['/emulator', this.session.id, 'item', value.id];
    return results;
  }
}
