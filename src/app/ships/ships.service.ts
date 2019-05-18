import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IShip, IShipType } from './ships';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShipTypes(): Observable<IShipType[]> {
    return this.http.get<IShipType[]>('api/getShipTypes.php')
      .pipe(
        map(response => response),
        catchError(this.handleError('getShipTypes', []))
      );
  }
  getShipsByType(shipType: string): Observable<IShip[]> {
    return this.http.get<IShip[]>('api/getShipsByType.php?shipType=' + shipType)
      .pipe(
        map(response => response),
        catchError(this.handleError('getShipsByType', []))
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
