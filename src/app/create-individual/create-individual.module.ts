import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIndividualRoutingModule } from './create-individual-routing.module';
import { CreateIndividualComponent } from './create-individual.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { InputMaskModule } from 'primeng/inputmask';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    CreateIndividualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateIndividualRoutingModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    AccordionModule,
    InputMaskModule,
    InputTextareaModule,
    MultiSelectModule
  ]
})
export class CreateIndividualModule { }
