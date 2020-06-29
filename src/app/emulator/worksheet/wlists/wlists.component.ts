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
    return this.model.items.fetch('PC');
  }

  get playerCharacters(): IWorksheetItem[] {
    return this.model.items.fetch('NPC');
  }

  get threads(): IWorksheetItem[] {
    return this.model.items.fetch('Thread');
  }

  createNonPlayerCharacter(): void {
    this.model.items.add(this.newNonPlayerCharacterName, 'NPC');

    this.newNonPlayerCharacterName = '';
  }

  createPlayerCharacter(): void {
    this.model.items.add(this.newPlayerCharacterName, 'PC');

    this.newPlayerCharacterName = '';
  }

  createThread(): void {
    this.model.items.add(this.newThreadName, 'Thread');

    this.newThreadName = '';
  }

  ngOnInit(): void {
    this.service.load().subscribe((arg) => (this.model = arg));
  }
}
