import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent implements OnInit {
  selectedGameNumber: number;
  siteRouting: ActivatedRoute;
  selectedGame: IGame;

  referees: string[] = [
    'Justin Rathbone',
    'Bill Gates',
    'Grace Hopper',
    'Alan Turing',
    'Steve Jobs',
    'Harrison Martindale',
    'Sydney Andreasen',
    'Ryan Etheridge',
  ];
  paymentAmounts: number[] = [15, 21, 24, 27, 30, 35, 39, 40, 45, 50, 55];
  gameLengths: number[] = [20, 25, 30, 35, 40, 45];
  cities: string[] = [
    'Omaha',
    'Elkhorn',
    'Gretna',
    'Lincoln',
    'Kearney',
    'Waverly',
    'La Vista',
  ];
  ageGroups: string[] = [
    'U5',
    'U7',
    'U9',
    'U11',
    'U13',
    'U14',
    'U15',
    'U16',
    'U18',
    'Adult',
  ];
  teams: string[] = [
    'Westside',
    'Blair',
    'Waverly',
    'Wahoo',
    'Lincoln Christian',
    'Pius X',
    'Fremont',
    'Columbus',
    'Elkhorn',
    'Scottsbluff',
    'Monowi',
  ];

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

  submit(f: NgForm) {
    this.selectedGame.address = f.value.address;
    this.selectedGame.ageGroup = f.value.ageGroup;
    this.selectedGame.assistantReferee1 = f.value.assistantReferee1;
    this.selectedGame.assistantReferee2 = f.value.assistantReferee2;
    this.selectedGame.awayTeam = f.value.awayTeam;
    this.selectedGame.centerReferee = f.value.centerReferee;
    this.selectedGame.city = f.value.city;
    this.selectedGame.fieldNumber = f.value.fieldNumber;
    this.selectedGame.gameDate = f.value.gameDate;
    this.selectedGame.gameLength = f.value.gameLength;
    this.selectedGame.homeTeam = f.value.homeTeam;
    this.selectedGame.location = f.value.location;

    this.scheduleService.saveChanges(this.selectedGame);
  }
}
