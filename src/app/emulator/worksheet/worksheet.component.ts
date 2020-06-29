import { Component, OnInit } from '@angular/core';
import { WorksheetViewModelService } from './worksheet-view-model.service';
import { WorksheetModel } from './WorksheetModel';
import { IWorksheetScene } from './interfaces';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css'],
})
export class WorksheetComponent implements OnInit {
  model: WorksheetModel;

  constructor(private service: WorksheetViewModelService) {}

  get chaos(): number {
    return this.model.chaos.value;
  }

  get currentScene(): any {
    return this.model.currentScene;
  }

  get scenes(): any[] {
    return this.model.scenes;
  }

  ngOnInit(): void {
    this.service.load().subscribe((arg) => {
      this.model = arg;
    });
  }

  onDecreaseChaosClick(): void {
    this.model.chaos.decrease();
  }

  onIncreaseChaosClick(): void {
    this.model.chaos.increase();
  }

  onSelectScene(value: IWorksheetScene): void {
    this.model.selectScene(value);
  }
}
