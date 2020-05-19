import { Injectable } from '@angular/core';
import { IGenericRepository } from './interfaces';
import { ISession } from './content';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private sessionService: SessionService) {}

  get session(): IGenericRepository<ISession> {
    return this.sessionService;
  }
}
