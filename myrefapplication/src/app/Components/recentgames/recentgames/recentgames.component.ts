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
    
  }

}
