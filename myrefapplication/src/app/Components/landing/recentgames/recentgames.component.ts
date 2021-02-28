import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';
import { IUser } from 'src/backend/user';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'recentgames',
  templateUrl: './recentgames.component.html',
  styleUrls: ['./recentgames.component.css']
})
export class RecentgamesComponent implements OnInit {

  
  recentGames: IGame[] = [];
  currentUser: IUser;

  constructor(private scheduleService: scheduleService, private userHandler: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('user')) as IUser

    if(this.currentUser.displayName != "John Doe")
    {
      scheduleService.getSchedule().subscribe({
            next: games => {
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
    else
    {
      scheduleService.getAnonymousScedule().subscribe({
        next: games => {
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

    
  }

  ngOnInit(): void {
    
  }

}
