import {Injectable} from '@angular/core';
import { IGame } from './game';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class scheduleService
{
    fullSchedule: Observable<IGame[]>;
    database: AngularFireDatabase;

    constructor(db: AngularFireDatabase){
        this.database = db;
        this.fullSchedule = this.database.list<IGame>('/').valueChanges();  
    }
    
    getSchedule(): Observable<IGame[]>
    {
        return this.fullSchedule;
    }

    getGame(gamenumber: Number): IGame{
        
        return null;
    }

}

