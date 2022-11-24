import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIndividualComponent } from './create-individual.component';

const routes: Routes = [
  {
    path: '',
    component: CreateIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateIndividualRoutingModule { }
