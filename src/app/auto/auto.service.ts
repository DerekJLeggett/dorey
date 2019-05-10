import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IAutoManufacturer, IAutoManufacturerDetails, IMake, IAutoType, IMakeByType, IModel } from './auto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient) { }
  getManufacturersURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
  getManufacturerDetailsURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/';
  getMakeForManufacturerURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmakeformanufacturer/';
  getMakeByTypeURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/';
  getModelsByMakeIdURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/';
  getAllManufacturers(): Observable<IAutoManufacturer[]> {
    return this.http.get<IAutoManufacturer[]>(this.getManufacturersURL)
      .pipe(
        map(response => response['Results']),
        catchError(this.handleError('getAllManufacturers', []))
      );
  }

  getVehicleTypes(): Observable<IAutoType[]> {
    return this.http.get<IAutoType[]>('assets/data/autoTypes.json')
      .pipe(
        map(response => response),
        catchError(this.handleError('getVehicleTypes', []))
      );
  }
  getMakesByType(type: string): Observable<IMakeByType[]> {
    return this.http.get<IMakeByType[]>(this.getMakeByTypeURL + type + '?format=json')
      .pipe(
        map(response => response['Results']),
        catchError(this.handleError('getMakesByType', []))
      );
  }
  getModelsByMakeId(makeId: string) {
    return this.http.get<IModel[]>(this.getModelsByMakeIdURL + makeId + '?format=json')
      .pipe(
        map(response => response['Results']),
        catchError(this.handleError('getModelsByMakeId', []))
      );
  }
  getManufacturerDetails(name: string): Observable<IAutoManufacturerDetails[]> {
    return this.http.get<IAutoManufacturerDetails[]>(this.getManufacturerDetailsURL + name + '?format=json')
      .pipe(
        map(response => response['Results']),
        catchError(this.handleError('getManufacturerDetails', []))
      );
  }

  getMakesByManufacturer(name: string): Observable<IMake[]> {
    return this.http.get<IMake[]>(this.getMakeForManufacturerURL + name + '?format=json')
      .pipe(
        map(response => response['Results']),
        catchError(this.handleError('getMakesByManufacturer', []))
      );
  }

  decodeVIN() {

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
