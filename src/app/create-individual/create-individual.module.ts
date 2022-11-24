import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIndividualRoutingModule } from './create-individual-routing.module';
import { CreateIndividualComponent } from './create-individual.component';


@NgModule({
  declarations: [
    CreateIndividualComponent
  ],
  imports: [
    CommonModule,
    CreateIndividualRoutingModule
  ]
})
export class CreateIndividualModule { }
