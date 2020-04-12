import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports:[
        MatMenuModule,
        BrowserAnimationsModule,
        BrowserModule,
    ],
    exports:[
        MatMenuModule,
        BrowserAnimationsModule,
        BrowserModule
    ]
})

export class CommonModule{

}