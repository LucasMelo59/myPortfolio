import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';



@NgModule({
  declarations: [],
  imports: [
    NgbCarouselModule,
    NgbAccordionModule
  ],
  exports: [
    NgbCarouselModule,
    NgbAccordionModule
  ]
})
export class NgBootstrapModule { }
