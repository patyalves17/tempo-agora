import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor(private http: HttpClient) {}

  getCity(lat: number, lng: number): Observable<any> {
    return this.http
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCDWLW2mAZYOBjN6QlYXG72XbZCk5HybAE`
      )
      .pipe(tap(data => data, error => console.log(error)));
  }
}
