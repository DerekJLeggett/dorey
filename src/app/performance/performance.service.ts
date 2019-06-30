import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICompany, IIndustry } from './performance';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) { }

  getTimingsByIndustryId(industryId: number): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('/api/getTimingsByIndustryId.php?industryId=' + industryId)
      .pipe(
        map(response => response),
        catchError(this.handleError('getPerformance', []))
      );
  }
  getIndustries(): Observable<IIndustry[]> {
    return this.http.get<IIndustry[]>('/api/getIndustries.php')
      .pipe(
        map(response => response),
        catchError(this.handleError('getIndustries', []))
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
