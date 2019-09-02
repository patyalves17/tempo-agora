import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../services/wether.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formCity: FormGroup;
  showMessage: boolean;
  loading = false;

  public lat;
  public lng;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formCity = new FormGroup({
      city: new FormControl(null, Validators.required)
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;

            this.geolocationService
              .getCity(this.lat, this.lng)
              .subscribe(data => {
                if (data.results.length > 0) {
                } else {
                  this.loading = false;
                  this.alert('Googleapis limite diario excedido =( ');
                }
              });
          }
        },
        (error: PositionError) =>
          this.alert('Geolocalização negada pelo usuário')
      );
    } else {
      this.alert('Geolocalização não suportada.');
    }
  }

  onSubmit() {
    if (!this.formCity.valid) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
      const city = this.formCity.value.city;

      this.weatherService.getTempeture(city).subscribe(
        result => {
          if (result) {
            this.router.navigate(['weather', city]);
          } else {
            this.alert('Cidade não encontrada');
          }
        },
        error => this.alert('Desculpe estamos com problemas no serviço.')
      );
    }
  }
  alert(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 3000
    });
  }
}
