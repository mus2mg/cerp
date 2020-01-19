import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login/login.component';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
