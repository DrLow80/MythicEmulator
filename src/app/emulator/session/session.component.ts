import { Component, OnInit } from '@angular/core';
import { IItem, ItemType, IScene } from '../shared/content';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { EmulatorService } from '../shared/emulator.service';
import { combineLatest } from 'rxjs';
import { SessionViewModel } from './SessionViewModel';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent implements OnInit {
  viewModel: SessionViewModel;

  constructor(
    private route: ActivatedRoute,
    private service: EmulatorService,
    private router: Router
  ) {}

  get chaos(): number {
    const result = this.viewModel.session.chaos;
    return result;
  }

  get title(): string {
    const result = this.viewModel.session.title;
    return result;
  }

  set title(value) {
    this.viewModel.session.title = value;
  }

  get allItems(): IItem[] {
    const results = this.viewModel.allItems;
    return results;
  }

  get nonPlayerCharacters(): IItem[] {
    const results = this.viewModel.nonPlayerCharacters;
    return results;
  }

  get playerCharacters(): IItem[] {
    const results = this.viewModel.playerCharacters;
    return results;
  }

  get threads(): IItem[] {
    const results = this.viewModel.threads;
    return results;
  }

  get scenes(): IScene[] {
    var results = this.viewModel.session.scenes;
    return results;
  }

  ngOnInit(): void {
    combineLatest(this.route.params)
      .pipe(map((results) => ({ ...results[0] })))
      .subscribe((x) => {
        this.service.loadSessionById(x.id).subscribe((session) => {
          if (!!session) {
            this.viewModel = new SessionViewModel(session);
          } else {
            this.router.navigate(['/emulator']);
          }
        });
      });
  }

  onAddItem(itemType: ItemType): void {
    const result = this.viewModel.addItem(itemType);
    this.onSelectedItem(result);
  }

  onAddScene(): void {
    const result = this.viewModel.generateRandomScene();
    this.onSelectedScene(result);
  }

  onAdjustChaos(value: number): void {
    this.viewModel.adjustChaos(value);
  }

  onSelectedItem(value: IItem): void {
    const commands = this.viewModel.itemCommands(value);
    this.router.navigate(commands);
  }

  onSelectedScene(value: IScene): void {
    const commands = this.viewModel.sceneCommands(value);
    this.router.navigate(commands);
  }
}
