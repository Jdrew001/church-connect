import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualComponent } from '../individual/individual.component';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'individuals',
                loadChildren: () => import('../individual/individual.module').then(m => m.IndividualModule)
            },
            {
                path: 'create-individual',
                loadChildren: () => import('../create-individual/create-individual.module').then(m => m.CreateIndividualModule)
            },
            {
                path: 'interactions',
                loadChildren: () => import('../interaction/interaction.module').then(m => m.InteractionModule)
            }
        ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }