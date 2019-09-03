import { MatSnackBar } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from '../services/wether.service';
import { MaterialModule } from '../custom-materia.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      providers: [WeatherService],
      declarations: [WeatherComponent]
    });

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get message', () => {
    const resp = component.getMessage(45);

    expect(resp).toBe('Só Deus na causa...');
  });
});
