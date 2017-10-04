import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TopNavComponent,
    FooterComponent
  ],
  declarations: [TopNavComponent, FooterComponent]
})
export class SharedModule { }
