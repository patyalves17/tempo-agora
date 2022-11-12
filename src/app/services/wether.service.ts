import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public responseCache = new Map();

  constructor(private http: HttpClient) {}

  getTempeture(city: string): Observable<any> {
    const url = `http://api.weatherbit.io/v1.0/current/geosearch?city=${city}&key=27c4a658156947d48017a0dbaa0e5a3e`;
    const tempetureFromCache = this.responseCache.get(url);

    if (tempetureFromCache) {
      return of(tempetureFromCache);
    }

    const response = this.http.get<any>(url);

    response.subscribe((tempeture) => this.responseCache.set(url, tempeture));
    return response;
  }

  getMessage(temp: number) {
    if (!temp) {
      return '';
    }

    if (temp < 2) {
      return 'É melhor esquentar um chá e assistir um Netflix..';
    }

    if (temp >= 2 && temp < 10) {
      return 'Que friooo..';
    }

    if (temp >= 10 && temp < 18) {
      return 'Está um frio suportável, partiu sair com a galera';
    }

    if (temp >= 18 && temp < 24) {
      return 'Temperatura ideal!!';
    }

    if (temp >= 24 && temp < 30) {
      return 'Está calor, coloque sua regata!';
    }

    if (temp >= 30 && temp < 40) {
      return 'Muito quente, partiu piscina!';
    }

    if (temp >= 40) {
      return 'Só Deus na causa...';
    }
  }
}
