import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,SharedModule,
    AuthRoutingModule,ReactiveFormsModule
  ],
})
export class AuthModule { }
