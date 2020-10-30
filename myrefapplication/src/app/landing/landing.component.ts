import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  today: string = null;
  constructor() { }

  getTodaysDate(): string{
    return this.today;
  }

  ngOnInit(): void {
    this.today = new Date().toLocaleDateString()
  }
}

  
