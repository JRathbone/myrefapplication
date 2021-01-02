import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  getTodaysDate(): string{
    return this.today;
  }

  ngOnInit(): void {  
    this.today = new Date().toLocaleDateString()
    //this.backend.get().subscribe((data) => this.assignValues(data));
  }

}
