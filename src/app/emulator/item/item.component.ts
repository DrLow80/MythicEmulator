import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem, ItemType, ItemTypes } from '../shared/content';
import { EmulatorService } from '../shared/emulator.service';
import { ItemViewModel } from './ItemViewModel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  viewModel: ItemViewModel;

  constructor(
    private router: ActivatedRoute,
    private service: EmulatorService
  ) {}

  get itemTypes(): ItemType[] {
    return ItemTypes;
  }

  public ngOnInit(): void {
    combineLatest(this.router.parent.params, this.router.params)
      .pipe(map((results) => ({ ...results[0], ...results[1] })))
      .subscribe((x) => {
        this.service.loadSessionById(x.id).subscribe((session) => {
          this.viewModel = new ItemViewModel(session, x.itemId);
        });
      });
  }

  get item(): IItem {
    return this.viewModel.item;
  }
}
