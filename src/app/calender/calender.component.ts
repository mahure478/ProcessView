import {Component, EventEmitter, Output} from '@angular/core';

import {NativeDateAdapter} from '@angular/material/core';



/** @title Datepicker emulating a Year and month picker */
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
 
  providers: [NativeDateAdapter]
})
export class CalenderComponent {
  @Output() changeDateEvent = new EventEmitter<any>();
  changeDateEventValue(e:any){
  this.changeDateEvent.emit(e)
  
  }

  
}