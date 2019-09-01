import { WeatherService } from './../services/wether.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html'
})
export class WeatherComponent implements OnInit {
  city: string;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city'];
    console.log(this.city);
    this.weatherService.getTempeture(this.city).subscribe(data => {
      console.log('component', data);
    });
  }
}
