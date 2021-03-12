import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent implements OnInit {
  selectedGameNumber: number;
  siteRouting: ActivatedRoute;
  selectedGame: IGame;

  constructor(route: ActivatedRoute, private scheduleService: scheduleService) {
    this.siteRouting = route;
  }

  ngOnInit(): void {
    this.selectedGame = null;
    this.selectedGameNumber = +this.siteRouting.snapshot.paramMap.get('num');

    let databaseRef = this.scheduleService.database.database.ref(
      '/games/' + this.selectedGameNumber
    );
    databaseRef.get().then((game) => {
      this.assignValueToGame(game.val());
    });
  }

  assignValueToGame(game: IGame) {
    this.selectedGame = game;
  }
}
