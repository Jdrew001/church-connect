import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {SidebarModule} from 'primeng/sidebar';
import { AuthService } from './core/guards/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from './core/services/toast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ButtonModule,
    SharedModule,
    SidebarModule,
    ToastModule
  ],
  providers: [
    MessageService,
    ToastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
