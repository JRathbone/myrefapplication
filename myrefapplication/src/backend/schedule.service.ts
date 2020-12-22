import {Injectable} from '@angular/core';
import { IGame } from './game';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class scheduleService
{
    constructor(db: AngularFireDatabase){
        db.list('/').valueChanges().subscribe(game => console.log(game));
    }


}