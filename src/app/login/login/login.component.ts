import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/login/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _login_service: LoginService) { }

  ngOnInit() {
  }

}