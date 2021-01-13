import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule} from '@angular/common/http';
import { SignOutComponent } from './sign-out/sign-out.component';


@NgModule({
  declarations: [SignUpComponent, SignInComponent, SignOutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AuthModule { }
