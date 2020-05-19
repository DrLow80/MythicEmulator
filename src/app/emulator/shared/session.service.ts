import { Injectable } from '@angular/core';
import { ISession } from './content';
import { IGenericRepository } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SessionService implements IGenericRepository<ISession> {
  sessions: ISession[] = [];

  constructor() {}

  getAll(): ISession[] {
    return this.sessions;
  }

  getById(id: any): ISession {
    const result = this.getAll().find((x) => x.id === id);

    return result;
  }

  insert(obj: ISession): void {
    this.sessions.push(obj);
  }

  update(obj: ISession): void {}

  delete(id: any): void {}

  save(): void {}
}
