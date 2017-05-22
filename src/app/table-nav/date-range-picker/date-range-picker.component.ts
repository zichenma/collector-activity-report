import { Component, OnInit } from '@angular/core';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
    
   private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
       

    };

     private placeholder: string = 'Select a date range';



  constructor() { }

    onDateRangeChanged(event: IMyDateRangeModel) {
        // event properties are: event.beginDate, event.endDate, event.formatted,
        // event.beginEpoc and event.endEpoc
    }

  ngOnInit() {
  }

}
