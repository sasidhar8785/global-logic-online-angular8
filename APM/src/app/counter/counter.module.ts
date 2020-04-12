import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import {Counter} from './counter.reducer';
import{ButtonComponent} from './button.component';
import{CounterComponent} from './counter.component';
import { DropdownComponent } from './dropdown.component';
import { CountryService } from './country.service';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffect } from './country.effects';
@NgModule({
imports:[
SharedModule,

StoreModule.forFeature('counter', Counter),
EffectsModule.forFeature(
    [ CountryEffect ]
  ),
],
declarations:[
    ButtonComponent,
    CounterComponent,
    DropdownComponent
],
providers:[CountryService],
exports:[ButtonComponent,CounterComponent,DropdownComponent]
})
export class CounterModule{}