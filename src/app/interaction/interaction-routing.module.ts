import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionComponent } from './interaction.component';

const routes: Routes = [
  {
    path: '',
    component: InteractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionRoutingModule { }
