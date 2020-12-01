import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assigned-games',
  templateUrl: './assigned-games.component.html',
  styleUrls: ['./assigned-games.component.css']
})
export class AssignedGamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';

  constructor() { }

  ngOnInit(): void {
    

    
  }

}
