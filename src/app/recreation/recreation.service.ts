import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IOrganization, IRecreationalArea } from './recreation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RecreationService {
  apiKey: string = '3C9D95801FC943DEA870FB27310E8761';
  //http://usda.github.io/RIDB/
  constructor(private http: HttpClient) { }
  getOrganizations(): Observable<IOrganization[]> {
    return this.http.get<IOrganization[]>('https://ridb.recreation.gov/api/v1/organizations/?apiKey=' + this.apiKey)
      .pipe(
        map(response => response['RECDATA']),
        catchError(this.handleError('getOrganizations', []))
      );
  }
  getRecreationalAreasByState(stateCode: string): Observable<IRecreationalArea[]> {
    return this.http.get<IRecreationalArea[]>('https://ridb.recreation.gov/api/v1/recareas?state=' + stateCode + '&apiKey=' + this.apiKey)
      .pipe(
        map(response => response['RECDATA']),
        catchError(this.handleError('getRecreationalAreasByState', []))
      )
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
