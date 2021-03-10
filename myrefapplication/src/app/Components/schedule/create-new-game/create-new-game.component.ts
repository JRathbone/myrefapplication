import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.css'],
})
export class CreateNewGameComponent implements OnInit {
  referees: string[] = [
    'Justin Rathbone',
    'Bill Gates',
    'Grace Hopper',
    'Alan Turing',
    'Steve Jobs',
    'Harrison Martindale',
    'Sydney Andreasen',
  ];
  paymentAmounts: number[] = [15, 21, 24, 27, 30, 35, 39, 40, 45, 50, 55];
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

  constructor() {}

  ngOnInit(): void {}
}
