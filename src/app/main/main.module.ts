import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';
import { RippleModule } from 'primeng/ripple';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    StyleClassModule,
    BadgeModule
  ]
})
export class MainModule { }
