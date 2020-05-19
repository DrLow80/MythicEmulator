import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { map, throwIfEmpty } from 'rxjs/operators';
import {
  FateActions,
  FateAction,
  FateSubject,
  FateSubjects,
  IQuestion,
  FateResult,
  FateResults,
  IItem,
  ItemType,
  ItemTypes,
  Focuses,
  Focus,
  SceneStatus,
  SceneStatuses,
  FateOdd,
  IScene,
} from '../shared/content';
import { combineLatest } from 'rxjs';
import { EmulatorService } from '../shared/emulator.service';
import { SceneViewModel } from './SceneViewModel';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
})
export class SceneComponent implements OnInit {
  viewModel: SceneViewModel;

  constructor(
    private route: ActivatedRoute,
    private service: EmulatorService,
    private router: Router
  ) {}

  get scene(): IScene {
    const result = this.viewModel.scene;
    return result;
  }

  get item(): IItem {
    const result = this.viewModel.item;
    return result;
  }

  get question(): IQuestion {
    const result = this.viewModel.question;
    return result;
  }

  get actions(): FateAction[] {
    return FateActions;
  }

  get allSceneStatuses(): SceneStatus[] {
    return SceneStatuses;
  }

  get fateResults(): FateResult[] {
    return FateResults;
  }

  get focuses(): Focus[] {
    return Focuses;
  }

  get itemTypes(): ItemType[] {
    return ItemTypes;
  }

  get subjects(): FateSubject[] {
    return FateSubjects;
  }

  ngOnInit(): void {
    combineLatest(this.route.parent.params, this.route.params)
      .pipe(map((results) => ({ ...results[0], ...results[1] })))
      .subscribe((x) => {
        this.service.loadSessionById(x.id).subscribe((session) => {
          this.viewModel = new SceneViewModel(session, x.sceneId);
        });
      });
  }

  onAddItem(): void {
    this.viewModel.addItem();
  }

  onAddQuestion(): void {
    this.viewModel.addQuestion();
  }

  onCompleted(value: number): void {
    this.viewModel.completedScene(value);
  }

  onGetFateResult(value: FateOdd): void {
    this.viewModel.getFateResult(value);
  }

  onSelectedItem(value: IItem): void {
    this.viewModel.item = value;
  }

  onSelectedQuestion(value: IQuestion) {
    this.viewModel.question = value;
  }
}
