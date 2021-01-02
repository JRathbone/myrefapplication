import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';


@Component({
  selector: 'assigned-games',
  templateUrl: './assigned-games.component.html',
  styleUrls: ['./assigned-games.component.css']
})
export class AssignedGamesComponent implements OnInit {

  
  assignedGames: IGame[] = [];

  constructor(private scheduleService: scheduleService) { 
  
    scheduleService.getSchedule().subscribe({
      next: games => {
        this.assignedGames = games.filter(game => game.hasBeenApprovedOrDeclined == false);
      }
    })
  }

  ngOnInit(): void {
    
  }
}
