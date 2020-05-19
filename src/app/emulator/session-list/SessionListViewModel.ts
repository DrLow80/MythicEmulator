import { ISession } from '../shared/content';
import { Guid } from 'guid-typescript';
export class SessionListViewModel {
  getCommands(session: ISession): string[] {
    var results = ['/emulator', session.id];
    return results;
  }
  constructor(public sessions: ISession[]) { }
  create(): ISession {
    const value: ISession = {
      id: Guid.create().toString(),
      chaos: 5,
      items: [],
      scenes: [],
      title: 'new session',
    };
    return value;
  }
}
