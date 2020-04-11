import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

//step 1 import Header Component
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { PhonePipe } from './pipes/phonepipe';
import { CommonService } from './services/common.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavitemsComponent,
    DropdownComponent,
    RegisterComponent,
    UsersComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:"register",component:RegisterComponent},
    {path:"users",component:UsersComponent},
    {path:"",component:RegisterComponent},]
    )
  ],
  providers: [CommonService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
