import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IPark } from './nps';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class NpsService {
  baseUrl: string = "https://developer.nps.gov/api/v1/parks?fields=images&limit=50&api_key=8sBuYXBQNGxwSU3ER3S6Xjd4Ys3COHuINh3KX9hn";
  constructor(private http: HttpClient) { }

  getParks(stateCode: string): Observable<IPark[]> {
    return this.http.get<IPark[]>(this.baseUrl + "&stateCode=" + stateCode)
      .pipe(
        map(response => response['data']),
        catchError(this.handleError('getParks', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
