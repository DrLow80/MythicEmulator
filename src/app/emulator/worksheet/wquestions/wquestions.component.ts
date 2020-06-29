import { Component, OnInit } from '@angular/core';
import { WorksheetViewModelService } from '../worksheet-view-model.service';
import { WorksheetModel } from '../WorksheetModel';
import { IWorksheetQuestion } from '../interfaces';
import { FateOdd } from '../../shared/content';

@Component({
  selector: 'app-wquestions',
  templateUrl: './wquestions.component.html',
  styleUrls: ['./wquestions.component.css'],
})
export class WquestionsComponent implements OnInit {
  model: WorksheetModel;
  questionText = '';

  constructor(private service: WorksheetViewModelService) {}

  get isEnabled(): boolean {
    return !!this.model.currentScene;
  }

  get questions(): IWorksheetQuestion[] {
    return this.model.currentScene.questions;
  }

  addQuestion(value: FateOdd) {
    this.model.addQuestion(value, this.questionText);

    this.questionText = '';
  }

  ngOnInit(): void {
    this.service.load().subscribe((arg) => (this.model = arg));
  }
}
