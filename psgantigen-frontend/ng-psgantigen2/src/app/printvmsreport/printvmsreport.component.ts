import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PsgantigenService } from '../psgantigen.service';

import { lastValueFrom } from 'rxjs';

interface Visitor {
  name: string,
  company: string,
  person_to_visit: string,
  type: string,
  visit_date: string,
  dept_to_visit: string,
  purpose: string
}

@Component({
  selector: 'app-printvmsreport',
  templateUrl: './printvmsreport.component.html',
  styleUrls: ['./printvmsreport.component.scss']
})
export class PrintvmsreportComponent implements OnInit {

  fetchData = '';
  jsonData = '';
  data = '';

  result: any;

  newObject: Visitor[] = [];
  array: any;


  constructor(
    private route: ActivatedRoute,
    private psgAntigen: PsgantigenService
  ) {

  }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      this.fetchData = params.get('json')||'';

      this.jsonData = decodeURIComponent(this.fetchData);
      this.data = JSON.parse(this.jsonData);

      this.fetchReport(this.data);

    });

  }

  async fetchReport(query: any) {

    this.result = await lastValueFrom(this.psgAntigen.fetchReport(query));

    console.log(this.result.doc);

    // Filtered payload data
    for (let i=0; i<this.result.doc.length; i++) {
      const date = new Date(this.result.doc[i].visit_date);
      const shortDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
       });

      this.newObject.push({
        name: this.result.doc[i].profile.fullname,
        company: this.result.doc[i].profile.company,
        person_to_visit: this.result.doc[i].person_to_visit,
        type: this.result.doc[i].type,
        visit_date: shortDate,
        dept_to_visit: this.result.doc[i].dept_to_visit,
        purpose: this.result.doc[i].purpose,
      });
    }

    // Sort by dept_to_visit
    this.newObject.sort((a: Visitor, b: Visitor) => {
      // if (a.dept_to_visit < b.dept_to_visit) return -1;
      // if (a.dept_to_visit > b.dept_to_visit) return 1;
      // return 0;
      if (a.dept_to_visit !== b.dept_to_visit) {
        return a.dept_to_visit.localeCompare(b.dept_to_visit);
      } else {
        if (a.person_to_visit < b.person_to_visit) {
          return -1;
        } else if (a.person_to_visit > b.person_to_visit) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    // Group By dept_to_visit
    this.array = this.groupByNokey(this.newObject, "dept_to_visit");

  }

  groupByNokey(collection: any, property: string) {
    var i = 1, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1)
            result[index].push(collection[i]);
        else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
  }

  // ngAfterViewInit(): void {
  //   window.print();
  // }









}


