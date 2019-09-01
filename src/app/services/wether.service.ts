import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public tempetura = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getTempeture(city: string): Observable<any> {
    return this.http
      .get(
        `http://api.weatherbit.io/v1.0/current/geosearch?city=${city}&key=191eaf36b8a24c31b1044543754a1636`
      )
      .pipe(
        tap(
          result => {
            if (result) {
              this.tempetura.next(result.data[0]);
            }
            return result;
          },

          error => console.log(error)
        )
      );
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
