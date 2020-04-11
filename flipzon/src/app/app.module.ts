import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

//step 1 import Header Component
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavitemsComponent,
    DropdownComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
