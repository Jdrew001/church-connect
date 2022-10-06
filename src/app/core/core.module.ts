import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './services/resource.service';
import { TokenService } from './services/token.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ResourceService,
    TokenService
  ]
})
export class CoreModule { }
