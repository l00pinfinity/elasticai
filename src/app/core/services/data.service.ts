import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {  } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay, retry, catchError } from 'rxjs/operators';
import { Completions } from '../interface/completions';

export interface Message{
  model:string;
  prompt:string;
  max_tokens:number;
  temperature:number;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer YOUR-API-KEY' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addChatMessage(model:string,prompt:string,max_tokens:number,temperature:number): Observable<any>{
    return this.http.post(environment.apiUrl + '/completions',{
      model,prompt,max_tokens,temperature
    },httpOptions).pipe(
      shareReplay(1),
      catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse) {
    return error.message;
  }
}
