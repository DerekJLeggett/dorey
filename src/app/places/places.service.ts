import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IPlace } from './places';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaces(lat: number, long: number): Observable<IPlace[]> {
    return this.http.get<IPlace[]>('/api/getPlaces.php?lat=' + lat + '&long=' + long)
      .pipe(
        map(response => response)
      );
  }
}
