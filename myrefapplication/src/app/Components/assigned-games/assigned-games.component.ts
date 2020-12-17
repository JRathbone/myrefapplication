import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/backend/game';
import { scheduleService } from 'src/app/backend/schedule.service';


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
    
    this.scheduleService.getSchedule().subscribe({next: games => this.assignedGames = games})
    
  }

  

}
