import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IFilm, ICharacter, IPlanet, ISpecies, IStarship, IVehicle } from './swapi';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  baseUrl = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) { }
  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.baseUrl + 'films/')
      .pipe(
        //tap(response => this.log(`fetched films`)),
        map(response => response['results']),
        catchError(this.handleError('getFilms', []))
      );
  }
  getCharacter(url: string): Observable<ICharacter> {
    return this.http.get<ICharacter>(url);
  }
  getPlanet(url: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(url);
  }
  getSpecies(url: string): Observable<ISpecies> {
    return this.http.get<ISpecies>(url);
  }
  getStarship(url: string): Observable<IStarship> {
    return this.http.get<IStarship>(url);
  }
  getVehicle(url: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(url);
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