import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get("http://api.weatherapi.com/v1/current.json?key=fc64cffa41db42b7931173623203110&q=Omaha");
  }
}
