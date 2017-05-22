import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { AppComponent } from './app.component';
import { TableMainComponent } from './table-main/table-main.component';
import { TableNavComponent } from './table-nav/table-nav.component';
import { DateRangePickerComponent } from './table-nav/date-range-picker/date-range-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    TableMainComponent,
    TableNavComponent,
    DateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
