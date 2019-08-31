import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatIconModule]
})
export class MaterialModule {}
