import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/backend/game';
import { scheduleService } from 'src/app/backend/schedule.service';

@Component({
  selector: 'upcominggames',
  templateUrl: './upcominggames.component.html',
  styleUrls: ['./upcominggames.component.css']
})
export class UpcominggamesComponent implements OnInit {

  public productUrl = '../../backend/schedule.json';
  assignedGames: IGame[] = [];
  today: Date = new Date();
  constructor(private scheduleService: scheduleService) { 


  }

  ngOnInit(): void {
    //this.assignedGames = this.scheduleService.getSchedule()
    //.filter(game => game.hasBeenApprovedOrDeclined == false)
    //.filter(game => game.gameDate < new Date);
    
  }

}
