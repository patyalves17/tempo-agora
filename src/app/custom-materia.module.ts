import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatCardModule]
})
export class MaterialModule {}
