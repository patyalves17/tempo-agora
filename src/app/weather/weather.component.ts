import { WeatherService } from './../services/wether.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string;
  weather: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city'];
    this.getTempeture();
  }

  getTempeture() {
    this.weatherService.getTempeture(this.city).subscribe(result => {
      if (result) {
        this.weather = result.data[0];
      }
    });
  }
  getMessage(temp: number): string {
    return this.weatherService.getMessage(temp);
  }
}
