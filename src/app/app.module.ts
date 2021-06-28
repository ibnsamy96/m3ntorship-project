import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoryComponent } from './story/story.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StartLifeComponent } from './start-life/start-life.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    StoryComponent,
    IngredientComponent,
    StartLifeComponent,
    CtaSectionComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
