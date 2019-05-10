import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ISeries } from './marvel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  baseUrl: string = "https://gateway.marvel.com:443/v1/public/series?apikey=1acc0272c26b58f06f418cf285aaf60c";

  constructor(private http: HttpClient) { }

  getSeries(): Observable<ISeries[]> {
    return this.http.get<ISeries[]>(this.baseUrl)
      .pipe(
        tap(response => console.log(response)),
        map(response => response['data']),
        map(response => response['results']),
        catchError(this.handleError('getSeries', []))
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
