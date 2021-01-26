import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';
import { UserService } from 'src/backend/user.service';



@Component({
  selector: 'assigned-games',
  templateUrl: './assigned-games.component.html',
  styleUrls: ['./assigned-games.component.css']
})
export class AssignedGamesComponent implements OnInit {

  
  assignedGames: IGame[] = [];
  selectedGame: IGame;

  constructor(private scheduleService: scheduleService,public dialog: MatDialog, private userHandler: UserService) { 
  
    scheduleService.getSchedule().subscribe({
      next: games => {
        
        //this.assignedGames = games.filter(game => 
         // game.hasBeenApprovedOrDeclined == false
        //  && (game.centerReferee == userHandler.currentUser.displayName 
        //  || game.assistantReferee1 == userHandler.currentUser.displayName 
        //  || game.assistantReferee2 == userHandler.currentUser.displayName));

        games.forEach(game => {
          if(game.centerHasApprovedOrDeclined == false && game.centerReferee == userHandler.currentUser.displayName)
          {
            this.assignedGames.push(game);
          }
          else if(game.AR1hasApprovedOrDeclined == false && game.assistantReferee1 == userHandler.currentUser.displayName)
          {
            this.assignedGames.push(game);
          }
          else if(game.AR2hasApprovedOrDeclined == false && game.assistantReferee2 == userHandler.currentUser.displayName)
          {
            this.assignedGames.push(game);
          }
        });
      }
    })
  }

  ngOnInit(): void {
    
  }

  openDialog(gamenumber: Number): void
  {
    this.selectedGame = this.assignedGames.filter(games => games.gameNumber == gamenumber)[0]
    const dialogRef = this.dialog.open(AssignedGamesDialog, {
      data: this.selectedGame,
      height: 'auto',
      width: '45vw'
   });
    
  }
}

@Component({
  selector: 'assigned-games-dialog',
  templateUrl: 'assigned-games-dialog.html',
})
export class AssignedGamesDialog {
  private selectedGame: IGame;
  constructor(public dialogRef: MatDialogRef<AssignedGamesDialog>,@Inject(MAT_DIALOG_DATA) public data: IGame) {
    
  }


}
