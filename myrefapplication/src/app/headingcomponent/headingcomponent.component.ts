import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-headingcomponent',
  templateUrl: './headingcomponent.component.html',
  styleUrls: ['./headingcomponent.component.css']
})
export class HeadingcomponentComponent implements OnInit {

  today: string = null;
  constructor() { 
    
  }

  getTodaysDate(): string{
    return this.today;
  }

  ngOnInit(): void {
    this.today = new Date().toLocaleDateString()
  }

}
