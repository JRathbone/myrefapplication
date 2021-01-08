
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userHandler: UserService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]]
    });
  }
  

  submit() : void{
    if(this.loginForm.valid)
    {
      this.userHandler.signin(this.loginForm.value.email,this.loginForm.value.password)
    }
    else
    {
      console.log("invalid form");
    }
  }
}
