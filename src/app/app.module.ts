import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { LoginService } from './login/login/login.service';

const routes:Routes = [
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),HttpClientModule],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
