import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formCity: FormGroup;

  ngOnInit() {
    this.formCity = new FormGroup({
      city: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.formCity);
  }
}
