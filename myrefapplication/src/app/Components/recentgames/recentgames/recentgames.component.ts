import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/backend/game';
import { scheduleService } from 'src/app/backend/schedule.service';

@Component({
  selector: 'recentgames',
  templateUrl: './recentgames.component.html',
  styleUrls: ['./recentgames.component.css']
})
export class RecentgamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';
  assignedGames: IGame[] = [];
  constructor(private scheduleService: scheduleService) { 
  }

  ngOnInit(): void {
    //this.assignedGames = this.scheduleService.getSchedule().filter(game => game.hasBeenApprovedOrDeclined == false)
    //.filter(game => game.gameDate > new Date);
  }

}
