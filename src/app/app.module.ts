import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { HeaderCardsComponent } from './header-cards/header-cards.component';
import { AmazonTodayDealComponent } from './amazon-today-deal/amazon-today-deal.component';
import { SkincareproductsComponent } from './skincareproducts/skincareproducts.component';
import { KurtaComponent } from './kurta/kurta.component';
import { KitchenWareComponent } from './kitchen-ware/kitchen-ware.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBottomComponent,
    HeaderCarouselComponent,
    HeaderCardsComponent,
    AmazonTodayDealComponent,
    SkincareproductsComponent,
    KurtaComponent,
    KitchenWareComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
