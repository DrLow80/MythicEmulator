import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatorRoutingModule } from './emulator-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EmulatorRoutingModule.Components],
  imports: [CommonModule, EmulatorRoutingModule, FormsModule, NgbModule],
})
export class EmulatorModule {}
