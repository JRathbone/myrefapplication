import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'upcominggames',
  templateUrl: './upcominggames.component.html',
  styleUrls: ['./upcominggames.component.css']
})
export class UpcominggamesComponent implements OnInit {

  
  upcomingGames: IGame[] = [];
  selectedGame: IGame;
  
  constructor(private scheduleService: scheduleService, public dialog: MatDialog) { 
    
    scheduleService.getSchedule().subscribe({
      next: games => {
        this.upcomingGames = games.filter(game => game.hasBeenApprovedOrDeclined == true && new Date(game.gameDate) > new Date);
      }
    })
  }

  ngOnInit(): void {
    
    
  }

  openDialog(gamenumber: Number): void
  {
    this.selectedGame = this.upcomingGames.filter(games => games.gameNumber == gamenumber)[0]
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: this.selectedGame
   });
    
  }

}

@Component({
  selector: 'upcoming-games-dialog',
  templateUrl: 'upcoming-games-dialog.html',
})
export class DialogContentExampleDialog {
  private selectedGame: IGame;
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: IGame) {
    
  }


}
