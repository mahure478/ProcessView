import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationdetailService {
//http://localhost:9090/companydata/getcompanydata
  constructor(private http: HttpClient) { }

gettabledata(){


  return this.http.get('http://localhost:9090/companydata/getcompanydata')
}

//http://localhost:9090/companydata/postcompanydata

filterTableData(body:any){
  return this.http.post('http://localhost:9090/companydata/postcompanydata',body)
}
}


