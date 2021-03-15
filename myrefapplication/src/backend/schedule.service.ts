import { Injectable } from '@angular/core';
import { IGame } from './game';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class scheduleService {
  fullSchedule: Observable<IGame[]>;
  database: AngularFireDatabase;
  anonymousSchedule: Observable<IGame[]>;
  siteRouting: Router;

  constructor(db: AngularFireDatabase, router: Router) {
    this.database = db;
    this.fullSchedule = this.database.list<IGame>('/games').valueChanges();
    this.anonymousSchedule = this.database
      .list<IGame>('/anonymousGames')
      .valueChanges();
    this.siteRouting = router;
  }

  getSchedule(): Observable<IGame[]> {
    return this.fullSchedule;
  }

  getGame(gamenumber: Number): IGame {
    var path = '/games/' + gamenumber;
    return null;
  }

  getAnonymousScedule(): Observable<IGame[]> {
    return this.anonymousSchedule;
  }

  deleteGame(gameNumber: number) {
    this.database.database
      .ref('/games')
      .child('' + gameNumber)
      .remove();
    console.log('this works');
  }

  editGame(gameNumber: number) {
    this.siteRouting.navigate(['/edit-game', { num: gameNumber }]);
  }

  saveChanges(game: IGame) {
    this.database.database
      .ref('/games')
      .child('' + game.gameNumber)
      .update(game);
    this.siteRouting.navigate(['/schedule']);
  }
}
