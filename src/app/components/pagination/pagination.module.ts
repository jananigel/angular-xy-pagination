import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PaginationComponent ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
