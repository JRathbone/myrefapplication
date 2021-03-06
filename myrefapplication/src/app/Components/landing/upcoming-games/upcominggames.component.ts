import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';
import { IUser } from 'src/backend/user';
import { UserService } from 'src/backend/user.service';

@Component({
  selector: 'upcominggames',
  templateUrl: './upcominggames.component.html',
  styleUrls: ['./upcominggames.component.css'],
})
export class UpcominggamesComponent implements OnInit {
  upcomingGames: IGame[] = [];
  selectedGame: IGame;
  currentUser: IUser;

  constructor(
    private scheduleService: scheduleService,
    public dialog: MatDialog,
    private userHandler: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user')) as IUser;
  }

  ngOnInit(): void {}

  openDialog(gamenumber: Number): void {
    this.selectedGame = this.upcomingGames.filter(
      (games) => games.gameNumber == gamenumber
    )[0];
    const dialogRef = this.dialog.open(UpcomingGamesDialog, {
      data: this.selectedGame,
      height: 'auto',
      width: '50vw',
    });
  }
}

@Component({
  selector: 'upcoming-games-dialog',
  templateUrl: 'upcoming-games-dialog.html',
  styleUrls: ['./upcoming-games-dialog.css'],
})
export class UpcomingGamesDialog {
  private selectedGame: IGame;
  constructor(
    public dialogRef: MatDialogRef<UpcomingGamesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IGame
  ) {}
}
