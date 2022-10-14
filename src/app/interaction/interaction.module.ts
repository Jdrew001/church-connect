import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { InteractionComponent } from './interaction.component';


@NgModule({
  declarations: [
    InteractionComponent
  ],
  imports: [
    CommonModule,
    InteractionRoutingModule
  ]
})
export class InteractionModule { }
