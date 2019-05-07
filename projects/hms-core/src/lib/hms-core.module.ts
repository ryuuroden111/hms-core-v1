import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HmsCoreComponent } from './hms-core.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HmsCoreComponent, HeaderComponent],
  imports: [
      CommonModule,
      RouterModule
  ],
  exports: [HmsCoreComponent, HeaderComponent]
})
export class HmsCoreModule { }
