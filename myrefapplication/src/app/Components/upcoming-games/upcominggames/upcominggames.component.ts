import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'upcominggames',
  templateUrl: './upcominggames.component.html',
  styleUrls: ['./upcominggames.component.css']
})
export class UpcominggamesComponent implements OnInit {

  
  upcomingGames: IGame[] = [];
  
  constructor(private scheduleService: scheduleService) { 
    scheduleService.getSchedule().subscribe({
      next: games => {
        this.upcomingGames = games.filter(game => game.hasBeenApprovedOrDeclined == true && new Date(game.gameDate) > new Date);
      }
    })

  }

  ngOnInit(): void {
    
    
  }

}
