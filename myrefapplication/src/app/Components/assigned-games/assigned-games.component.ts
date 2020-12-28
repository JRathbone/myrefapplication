import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';


@Component({
  selector: 'assigned-games',
  templateUrl: './assigned-games.component.html',
  styleUrls: ['./assigned-games.component.css']
})
export class AssignedGamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';
  assignedGames: IGame[] = [];
  constructor(private scheduleService: scheduleService) { 
  

  }

  ngOnInit(): void {
    
    
    
  }

  

  

}
