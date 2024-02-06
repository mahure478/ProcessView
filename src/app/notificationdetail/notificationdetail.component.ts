import { AfterViewInit, Component, OnInit, ViewChild, effect } from '@angular/core';
import { NotificationdetailService } from './notificationdetail.service';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';
import {MatPaginator} from '@angular/material/paginator';
export interface NameInterface {
  id: number;
  name: string;
}

@Component({
  selector: 'app-notificationdetail',
  templateUrl: './notificationdetail.component.html',
  styleUrls: ['./notificationdetail.component.scss'],
})
export class NotificationdetailComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'processId',
    'processIdMetalId',
    'verticalName',
    'clientName',
    'clientCategory',
    'buName',
    'solutionEndDate',
    'onshoreKT',
    'transitionCategory',
    'type',
  ];
  dataSource: any;
  verticalNameArray: NameInterface[] = [];
  clientNameArray: NameInterface[] = [];
  selectedVerticalName: string = '';
  selectedClientName: string = '';
  selectedDate: string = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private ns: NotificationdetailService) {}

  ngOnInit() {
    this.reteriveTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  reteriveTableData() {
    this.ns.gettabledata().subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
      if (this.dataSource) {
        this.dataSource.filter((singlevalue: any) =>
          this.verticalNameArray.push({
            id: singlevalue.id,
            name: singlevalue.name,
          })
        );

        this.dataSource.filter((singlevalue: any) =>
          this.clientNameArray.push({
            id: singlevalue.id,
            name: singlevalue.clientName,
          })
        );
      }
    });
  }
  getClientName(e: any) {
    //console.log(e)
    this.selectedClientName = e.value;
  }
  getVerticalName(e: any) {
    //console.log(e)
    this.selectedVerticalName = e.value;
  }
  getDateDetail(e: any) {
    const date = e.value.setSeconds(0,0);
    this.selectedDate = new Date(date).toISOString(); 
    console.log(this.selectedDate)
  }
  filterData() {
    let payload = {
      verticalName: this.selectedVerticalName,
      clientName: this.selectedClientName,
      date: this.selectedDate,
    };
    this.ns
      .filterTableData(payload)
      .subscribe((data) => this.reteriveTableData());
  }

  downloadData(){
   return new AngularCsv(this.dataSource, 'My Report');
  }

  resetData() {
    this.selectedClientName = ''
    this.selectedVerticalName = ''
    this.selectedDate = ''
  }
}
