import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGame } from 'src/backend/game';
import { scheduleService } from 'src/backend/schedule.service';

@Component({
  selector: 'create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.css'],
})
export class CreateNewGameComponent implements OnInit {
  database: AngularFireDatabase;

  test: IGame;
  createGameForm: FormGroup;
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
  genders: string[] = ['B', 'G'];

  //figure out city, states

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.database = db;
  }

  ngOnInit(): void {
    this.createGameForm = this.fb.group({
      centerReferee: ['', [Validators.required]],
      AsstReferee1: ['', [Validators.required]],
      AsstReferee2: ['', [Validators.required]],
      homeTeam: ['', [Validators.required]],
      awayTeam: ['', [Validators.required]],
      ageGroup: ['', [Validators.required]],
      gameLength: ['', [Validators.required]],
      dateTime: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      location: ['', [Validators.required]],
      fieldNumber: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.createGameForm.valid) {
      let newGame = {
        gameNumber: Math.floor(Math.random() * (99999 - 11111) + 11111),
        centerReferee: this.createGameForm.value.centerReferee,
        assistantReferee1: this.createGameForm.value.AsstReferee1,
        assistantReferee2: this.createGameForm.value.AsstReferee2,
        homeTeam: this.createGameForm.value.homeTeam,
        awayTeam: this.createGameForm.value.awayTeam,
        ageGroup: this.createGameForm.value.ageGroup,
        gameLength: this.createGameForm.value.gameLength,
        gameDate: this.createGameForm.value.dateTime,
        city: this.createGameForm.value.city,
        state: 'NE',
        address: this.createGameForm.value.address,
        location: this.createGameForm.value.location,
        fieldNumber: this.createGameForm.value.fieldNumber,
        homeTeamScore: 0,
        awayTeamScore: 0,
        notes: '',
        numYellowCards: 0,
        numRedCards: 0,
        centerHasApprovedOrDeclined: false,
        hasBeenCompleted: false,
        AR1HasApprovedOrDeclined: false,
        AR2HasApprovedOrDeclined: false,
        ARGamePay: 12,
        CenterGamePay: 20,
      };

      const databaseReference = this.database.database
        .ref('/games')
        .child('' + newGame.gameNumber)
        .set(newGame);

      this.router.navigate(['/schedule']);
    } else {
      console.log('not a valid form');
    }
  }
}
