import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatorRoutingModule } from './emulator-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WsceneComponent } from './worksheet/wscene/wscene.component';
import { WlistsComponent } from './worksheet/wlists/wlists.component';
import { WquestionsComponent } from './worksheet/wquestions/wquestions.component';

@NgModule({
  declarations: [EmulatorRoutingModule.Components, WsceneComponent, WlistsComponent, WquestionsComponent],
  imports: [CommonModule, EmulatorRoutingModule, FormsModule, NgbModule],
})
export class EmulatorModule {}
