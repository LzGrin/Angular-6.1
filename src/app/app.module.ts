import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {ProductsModule} from './components/products/products.module';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {PopupComponent} from './components/popup/popup.component';
import {ProductLineComponent} from './components/product-line/product-line.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    BannerComponent,
    FooterComponent,
    PopupComponent,
    ProductLineComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


