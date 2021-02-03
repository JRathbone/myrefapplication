import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/backend/user';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  today: string = null;
  tempF: Number = 0;
  condition: string = "";
  iconUrl: string = "";
  windMph: number = 0;
  humidity: number  = 0;
  feelsLikeF: number = 0;
  maxTemp: number = 0;
  minTemp: number = 0;
  city: string = "";
  state: string = "";
  currentUser: IUser;
  _userhandler: UserService;

  constructor(private userHandler: UserService) { 
    this._userhandler = userHandler;
    
  }

  getTodaysDate(): string{
    return this.today;
  }

  ngOnInit(): void {  
    this.today = new Date().toLocaleDateString()
    //this.backend.get().subscribe((data) => this.assignValues(data));
    
    this.currentUser = JSON.parse(localStorage.getItem('user')) as IUser
    
  }



}
