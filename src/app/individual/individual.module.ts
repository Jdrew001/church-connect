import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualRoutingModule } from './individual-routing.module';
import { IndividualComponent } from './individual.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import {OverlayPanelModule} from 'primeng/overlaypanel';


@NgModule({
  declarations: [
    IndividualComponent
  ],
  imports: [
    CommonModule,
    IndividualRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    DataViewModule,
    OverlayPanelModule
  ]
})
export class IndividualModule { }
