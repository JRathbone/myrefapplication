import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'recentgames',
  templateUrl: './recentgames.component.html',
  styleUrls: ['./recentgames.component.css']
})
export class RecentgamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';
  recentGames: IGame[] = [];

  constructor(private scheduleService: scheduleService) { 
  }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe({next: games => {
      this.recentGames = games.filter(games => games.hasBeenApprovedOrDeclined == true && new Date(games.gameDate) < new Date)
    }})
  }

}
