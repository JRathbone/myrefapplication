import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'upcominggames',
  templateUrl: './upcominggames.component.html',
  styleUrls: ['./upcominggames.component.css']
})
export class UpcominggamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';
  upcomingGames: IGame[] = [];
  
  constructor(private scheduleService: scheduleService) { 
    

  }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe({next: games => {
      
      this.upcomingGames = games.filter(games => new Date(games.gameDate) > new Date && games.hasBeenApprovedOrDeclined == true);
      
    }})
    
  }

}
