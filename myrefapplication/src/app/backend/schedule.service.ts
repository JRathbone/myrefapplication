import {Injectable} from '@angular/core';
import { IGame } from './game';

@Injectable({
    providedIn: 'root'
})
export class scheduleService
{

    getSchedule(): IGame[]
    {
        return [
            {
               "gameNumber": 0,
               "homeTeam": "Rangers FC",
               "awayTeam": "Vikings",
               "ageGroup": "U14B",
               "gameLength": 45,
               "gameDate": new Date(2018, 11),
               "city": "Omaha",
               "state": "NE",
               "address": "111 Main St.",
               "location": "SPR",
                "fieldNumber": 3,
                "homeTeamScore": 0,
                "awayTeamScore": 0,
                "assistantReferee1": "John Doe",
                "assistantReferee2": "Scott Frost",
                "centerReferee": null,
                "notes": "bad parents",
                "numYellowCards": 1,
                "numRedCards": 2,
                "hasBeenApprovedOrDeclined": false,
                "hasBeenCompleted": false
            },
            {
                "gameNumber": 1,
                "homeTeam": "Rangers FC",
                "awayTeam": "Vikings",
                "ageGroup": "U14",
                "gameLength": 45,
                "gameDate": new Date(2018, 11),
                "city": "Omaha",
                "state": "NE",
                "address": "111 Main St.",
                "location": "Spirit Park",
                 "fieldNumber": 3,
                 "homeTeamScore": 0,
                 "awayTeamScore": 0,
                 "assistantReferee1": "John Doe",
                 "assistantReferee2": "Scott Frost",
                 "centerReferee": null,
                 "notes": "bad parents",
                 "numYellowCards": 1,
                 "numRedCards": 2,
                 "hasBeenApprovedOrDeclined": true,
                 "hasBeenCompleted": false
             },
             {
               "gameNumber": 2,
               "homeTeam": "Rangers FC",
               "awayTeam": "Vikings",
               "ageGroup": "U14",
               "gameLength": 45,
               "gameDate": new Date(2018, 11),
               "city": "Omaha",
               "state": "NE",
               "address": "111 Main St.",
               "location": "Spirit Park",
                "fieldNumber": 3,
                "homeTeamScore": 0,
                "awayTeamScore": 0,
                "assistantReferee1": "John Doe",
                "assistantReferee2": "Scott Frost",
                "centerReferee": null,
                "notes": "bad parents",
                "numYellowCards": 1,
                "numRedCards": 2,
                "hasBeenApprovedOrDeclined": false,
                "hasBeenCompleted": false
            }
            
            
         ]
    }
}