import { ISession, IItem, getAllItems } from '../shared/content';
export class ItemViewModel {
  item: IItem;
  constructor(public session: ISession, itemId: string) {
    this.item = getAllItems(this.session).find((n) => n.id === itemId);
  }
}
