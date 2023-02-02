import { Component, OnInit } from '@angular/core';
import { PsgantigenService } from '../psgantigen.service';

import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent  implements OnInit {
  empno = '';
  name = '';
  office = '';

  hostUrl = environment.urlPoint;

  constructor(
    private psgAntigen: PsgantigenService) { }

  ngOnInit(): void {
  }

  onPrintForm() {
    window.open(`${this.hostUrl}/printemp/${this.name}/${this.office}`, '_blank');
  }

  async search(empno: string) {
    if (empno) {

      const result = await lastValueFrom(this.psgAntigen.searchEmp(empno));
      if (result.response.length !== 0) {
        this.name = result.response[0].first_name + ' ' + result.response[0].last_name;
        this.office = result.response[0].office_desc;
      }
      else {
        alert('Employee not found!');
      }
    } else {
      alert('Input Employee No!');
    }

  }

  clear() {
    this.empno = '';
    this.name = '';
    this.office = '';
  }
}
