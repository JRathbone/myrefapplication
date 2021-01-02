import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'recentgames',
  templateUrl: './recentgames.component.html',
  styleUrls: ['./recentgames.component.css']
})
export class RecentgamesComponent implements OnInit {

  
  recentGames: IGame[] = [];

  constructor(private scheduleService: scheduleService) { 
    scheduleService.getSchedule().subscribe({
      next: games => {
        this.recentGames = games.filter(game => game.hasBeenApprovedOrDeclined == true && new Date(game.gameDate) < new Date);
      }
    })
  }

  ngOnInit(): void {
    
  }

}
