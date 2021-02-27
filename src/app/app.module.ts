import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {CounterComponent} from './components/counter/counter.component';
import {BasketComponent} from './components/basket/basket.component';
import {ProductDataService} from './services/product-data.service';
import {HttpClientModule} from '@angular/common/http';
import {AddProductComponent} from './components/admin/add-Product.component';
import {LoginComponent} from './components/login/login.component';


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
    ProductLineComponent,
    CounterComponent,
    BasketComponent,
    AddProductComponent,
    LoginComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ProductsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    ProductService,
    ProductDataService
  ],
  exports: [
    CounterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


