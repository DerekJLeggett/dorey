import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICovidCounts } from './covid';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidCounts(): Observable<ICovidCounts[]> {
    return this.http.get<ICovidCounts[]>('/api/getCovidCounts.php')
      .pipe(
        map(response => response)
      );
  }
}
