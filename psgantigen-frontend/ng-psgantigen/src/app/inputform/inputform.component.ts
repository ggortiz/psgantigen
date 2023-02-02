import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {

  name = '-';
  age = '-';
  gender = '-';
  office = '-';
  contact  = '-';

  hostUrl = environment.urlPoint;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.office = this.route.snapshot.paramMap.get('office') as string;
    this.contact = this.route.snapshot.paramMap.get('contact') as string;
  }

  onPrintForm() {
    window.open(`${this.hostUrl}/print/${this.name}/${this.office}/${this.contact}/${this.age}/${this.gender}`, '_blank');
  }

}
