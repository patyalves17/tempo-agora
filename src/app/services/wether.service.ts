import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getTempeture(city: string): Observable<any> {
    return this.http
      .get(
        `http://api.weatherbit.io/v1.0/current/geosearch?city=${city}&key=191eaf36b8a24c31b1044543754a1636`
      )
      .pipe(tap(data => console.log(data), error => console.log(error)));
  }
}
