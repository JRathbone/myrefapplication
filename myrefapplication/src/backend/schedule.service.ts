import {Injectable} from '@angular/core';
import { IGame } from './game';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class scheduleService
{
    fullSchedule: IGame[] = [];
    constructor(db: AngularFireDatabase){
        db.list('/').valueChanges().subscribe({
            next: games => {
                this.fullSchedule = games as IGame[]
            }
        })
        
    }
    
    getSchedule(): any[]
    {
        return this.fullSchedule;
    }

    getAssignedGames(): IGame[]
    {
        return this.fullSchedule.filter(game => game.hasBeenApprovedOrDeclined == false)
    }

    getRecentGames(): IGame[]
    {
        return this.fullSchedule.filter(game => game.hasBeenApprovedOrDeclined == true && new Date(game.gameDate) < new Date)
    }

    getUpcomingGames(): IGame[]
    {
        return this.fullSchedule.filter(games => new Date(games.gameDate) > new Date && games.hasBeenApprovedOrDeclined == true);
    }
}

