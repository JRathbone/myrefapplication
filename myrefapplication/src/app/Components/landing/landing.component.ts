import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { UserService } from 'src/backend/user.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
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

  constructor(private backend: BackendService, private userHandler: UserService) 
  { 

  }

  getTodaysDate(): string{
    return this.today;
  }

  ngOnInit(): void {  
    this.today = new Date().toLocaleDateString()
    //this.backend.get().subscribe((data) => this.assignValues(data));
  }

  assignValues(data)
  {
    this.city = data.location.name;
    this.state = data.location.region;
    this.tempF = data.current.temp_f;
    this.condition = data.current.condition.text;
    this.iconUrl = data.current.condition.icon;
    this.windMph = data.current.wind_mph;
    this.humidity = data.current.humidity;
    this.feelsLikeF = data.current.feelslike_f;
    this.maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
    this.minTemp = data.forecast.forecastday[0].day.mintemp_f;
  }

  logout()
  {
    this.userHandler.logout()
  }
}
  
