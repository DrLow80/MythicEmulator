import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmulatorService } from '../shared/emulator.service';
import { SessionListViewModel } from './SessionListViewModel';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
  viewModel: SessionListViewModel;

  constructor(private service: EmulatorService, private router: Router) {}

  onAdd(): void {
    const session = this.viewModel.create();
    const result = this.service.addSession(session);
    if (!result) {
      return;
    }
    const commands = this.viewModel.getCommands(session);
    this.router.navigate(commands);
  }

  public ngOnInit(): void {
    this.service
      .loadSessions()
      .subscribe(
        (sessions) => (this.viewModel = new SessionListViewModel(sessions))
      );
  }
}
