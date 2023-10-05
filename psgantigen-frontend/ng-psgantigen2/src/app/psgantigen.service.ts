import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const hrmsUrl = environment.hrmsUrl;
const vmsUrl = environment.vmsUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PsgantigenService {

  constructor(
    private http: HttpClient) {}

  searchEmp(empno: string): Observable<any> {

    // Add safe, URL encoded search parameter if there is a search term
    const options = empno ?
     {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     } : {};

    return this.http.get<any>(hrmsUrl + '/api/v1/hrmspersonnel/' + empno, options)
  }

  fetchReport(query: string): Observable<any> {
    const options = query ?
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    } : {};

    return this.http.post<any>(vmsUrl + '/visit/fetchReport', query, options)

  }


}
