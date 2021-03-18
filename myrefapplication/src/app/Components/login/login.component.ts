import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/backend/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private userHandler: UserService) {
    this.user = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  submit(f: NgForm): void {
    //this.userHandler.signin(this.loginForm.value.email,this.loginForm.value.password)
    this.userHandler.signin(f.value.email, f.value.password);
  }

  loginAnonymously(): void {
    this.userHandler.signin('anonymous@mail.com', 'anonymous');
  }
}
