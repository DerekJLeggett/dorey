import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICountry, IState } from './world';
@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }

  getCountriesNestedLanguages(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>('/api/getCountriesNestedLanguages.php')
      .pipe(
        map(response => response)
      );
  }

  getStatesNestedCitiesByCountryCode(countryCode: string): Observable<IState[]> {
    return this.http.get<IState[]>('/api/getStatesNestedCitiesByCountryCode.php?countryCode=' + countryCode)
      .pipe(
        map(response => response)
      );
  }
}
