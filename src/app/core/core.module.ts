import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './services/resource.service';
import { TokenService } from './services/token.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptors/token.interceptor.service';
import { UserService } from './services/user.service';
import { AuthService } from './guards/auth.service';
import {ToastModule} from 'primeng/toast';
import { ToastService } from './services/toast.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    ResourceService,
    TokenService,
    UserService,
    AuthService,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
