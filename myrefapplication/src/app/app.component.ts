import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/backend/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'myRef';
  
  isLoggedIn = false;
  constructor(private userHandler: UserService)
  {
    
  }

  logout()
  {

  }

  


  
  
}
