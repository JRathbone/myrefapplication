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
    constructor(db: AngularFireDatabase){
        this.fullSchedule = db.list<IGame>('/').valueChanges();
        
    }
    
    getSchedule(): Observable<IGame[]>
    {
        return this.fullSchedule;
    }

}

