import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'recentgames',
  templateUrl: './recentgames.component.html',
  styleUrls: ['./recentgames.component.css']
})
export class RecentgamesComponent implements OnInit {

  
  recentGames: IGame[] = [];

  constructor(private scheduleService: scheduleService, private userHandler: UserService) { 
    scheduleService.getSchedule().subscribe({
      next: games => {
        //this.recentGames = games.filter(game => game.hasBeenApprovedOrDeclined == true && new Date(game.gameDate) < new Date);

        games.forEach(game => {
          if(game.centerHasApprovedOrDeclined && game.AR1hasApprovedOrDeclined && game.AR2hasApprovedOrDeclined && new Date(game.gameDate) < new Date)
          {
            if(userHandler.currentUser.displayName == game.assistantReferee1 ||userHandler.currentUser.displayName == game.assistantReferee2 || userHandler.currentUser.displayName == game.centerReferee )
            {
              this.recentGames.push(game);
            }
          }
        });
      }
    })
  }

  ngOnInit(): void {
    
  }

}
