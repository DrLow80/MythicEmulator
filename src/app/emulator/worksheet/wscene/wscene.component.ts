import { Component, OnInit, Input } from '@angular/core';
import { WorksheetViewModelService } from '../worksheet-view-model.service';
import { WorksheetModel } from '../WorksheetModel';

@Component({
  selector: 'app-wscene',
  templateUrl: './wscene.component.html',
  styleUrls: ['./wscene.component.css'],
})
export class WsceneComponent implements OnInit {
  model: WorksheetModel;

  constructor(private service: WorksheetViewModelService) {}

  get status() {
    return this.model.currentScene.status;
  }

  get action() {
    return this.model.currentScene.action;
  }

  get contextItem() {
    return this.model.currentScene.item;
  }

  get focus() {
    return this.model.currentScene.focus;
  }

  get isBackDisabled(): boolean {
    return !this.model.canBack;
  }

  get isEnabled() {
    return this.model.currentScene;
  }

  get sceneNumber() {
    return this.model.currentScene.index;
  }

  get subject() {
    return this.model.currentScene.subject;
  }

  ngOnInit(): void {
    this.service.load().subscribe((arg) => (this.model = arg));
  }

  onClickBack(): void {
    this.model.back();
  }

  onClickNext(): void {
    this.model.next();
  }
}
