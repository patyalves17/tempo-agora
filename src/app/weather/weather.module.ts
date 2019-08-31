import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../custom-materia.module';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, MaterialModule]
})
export class WeatherModule {}
