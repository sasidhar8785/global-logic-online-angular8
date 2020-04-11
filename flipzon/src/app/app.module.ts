import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//step 1 import Header Component
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    //include Header Component to use it in the application.
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
