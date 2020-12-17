import {Injectable} from '@angular/core';
import { IGame } from './game';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class scheduleService
{
    private scheduleURL = "../assets/Schedule.json";

    constructor(private http: HttpClient){}

    getSchedule(): Observable<IGame[]>
    {
        return this.http.get<IGame[]>(this.scheduleURL) 
    }
}