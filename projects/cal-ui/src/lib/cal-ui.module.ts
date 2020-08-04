import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { CalUiButtonComponent } from './cal-ui-button/cal-ui-button.component';
@NgModule({
  declarations: [CalUiButtonComponent],
  imports: [MatButtonModule],
  exports: [CalUiButtonComponent],
})
export class CalUiModule { }
