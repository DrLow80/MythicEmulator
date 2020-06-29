import { Component, OnInit } from '@angular/core';
import { WorksheetViewModelService } from '../worksheet-view-model.service';
import { WorksheetModel } from '../WorksheetModel';
import { IWorksheetItem } from '../interfaces';

@Component({
  selector: 'app-wlists',
  templateUrl: './wlists.component.html',
  styleUrls: ['./wlists.component.css'],
})
export class WlistsComponent implements OnInit {
  model: WorksheetModel;
  newNonPlayerCharacterName = '';
  newPlayerCharacterName = '';
  newThreadName = '';

  constructor(private service: WorksheetViewModelService) {}

  get nonPlayerCharacters(): IWorksheetItem[] {
    return this.model.nonPlayerCharacters;
  }

  get playerCharacters(): IWorksheetItem[] {
    return this.model.playerCharacters;
  }

  get threads(): IWorksheetItem[] {
    return this.model.threads;
  }

  createNonPlayerCharacter(): void {
    this.model.addItem(this.newNonPlayerCharacterName, 'NPC');

    this.newNonPlayerCharacterName = '';
  }

  createPlayerCharacter(): void {
    this.model.addItem(this.newPlayerCharacterName, 'PC');

    this.newPlayerCharacterName = '';
  }

  createThread(): void {
    this.model.addItem(this.newThreadName, 'Thread');

    this.newThreadName = '';
  }

  ngOnInit(): void {
    this.service.load().subscribe((arg) => (this.model = arg));
  }
}
