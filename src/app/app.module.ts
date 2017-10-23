
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SlickModule } from 'ngx-slick';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HidiveComponent } from './hidive/hidive.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavmenuComponent,
    HidiveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
