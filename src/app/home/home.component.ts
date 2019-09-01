import { GeolocationService } from './../services/geolocation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formCity: FormGroup;
  showMessage: boolean;

  public lat;
  public lng;

  constructor(
    private geolocationService: GeolocationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formCity = new FormGroup({
      city: new FormControl(null, Validators.required)
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;

            this.geolocationService
              .getCity(this.lat, this.lng)
              .subscribe(data => {
                console.log('component ', data);
              });
          }
        },
        (error: PositionError) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  onSubmit() {
    if (!this.formCity.valid) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
      const city = this.formCity.value.city;
      this.router.navigate(['weather', city]);
    }
  }
}
