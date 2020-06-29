import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmulatorComponent } from './emulator.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session/session.component';
import { ItemComponent } from './item/item.component';
import { SceneComponent } from './scene/scene.component';
import { WorksheetComponent } from './worksheet/worksheet.component';

// const routes: Routes = [
//   { path: '', component: SessionListComponent },
//   {
//     path: ':id',
//     component: SessionComponent,
//     children: [
//       { path: 'item/:itemId', component: ItemComponent },
//       { path: 'scene/:sceneId', component: SceneComponent },
//     ],
//   },
// ];

const routes: Routes = [{ path: '', component: WorksheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmulatorRoutingModule {
  public static Components = [
    EmulatorComponent,
    SessionListComponent,
    SessionComponent,
    ItemComponent,
    SceneComponent,
    WorksheetComponent,
  ];
}
