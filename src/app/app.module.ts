import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './property/property.component';
import { UsingAdviceComponent } from './using-advice/using-advice.component';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';



const routes: Routes = [
  {path: 'produits', component: ProductsListComponent},
  {path: 'produits/:id', component: SingleProductViewComponent},
  {path: 'proprietes', component: PropertiesComponent},
  {path: 'proprietes/:id', component: PropertiesComponent},
  {path: 'conseils_d_utilisation', component: UsingAdviceComponent},
  {path: 'conseils_d_utilisation/:id', component: UsingAdviceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'a_propos', component: AboutComponent},
  {path: '', component: ProductsListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SingleProductComponent,
    ProductsListComponent,
    PropertiesComponent,
    PropertyComponent,
    UsingAdviceComponent,
    SingleProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
