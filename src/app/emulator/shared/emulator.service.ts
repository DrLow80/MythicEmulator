import { Injectable } from '@angular/core';
import { ISession } from './content';
import { Observable, of } from 'rxjs';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class EmulatorService {
  constructor(private service: RepositoryService) {}

  loadSessions(): Observable<ISession[]> {
    return of(this.service.session.getAll());
  }

  addSession(value: ISession): boolean {
    this.service.session.insert(value);

    return true;
  }

  loadSessionById(id: string): Observable<ISession> {
    const result = this.service.session.getById(id);

    return of(this.service.session.getById(id));
  }
}
