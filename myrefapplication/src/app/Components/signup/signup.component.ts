import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private userHandler: UserService){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  submit() : void{
    if(this.signUpForm.invalid)
    {
      
    }
    else
    {
      this.userHandler.signup(this.signUpForm.value.email,this.signUpForm.value.password);
      
    }
  }
  
}
