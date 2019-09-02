import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { GeolocationService } from '../services/geolocation.service';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [GeolocationService],
      declarations: [HomeComponent]
    }).compileComponents();
  }));
});
