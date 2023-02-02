import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printformpos',
  templateUrl: './printformpos.component.html',
  styleUrls: ['./printformpos.component.scss']
})
export class PrintformposComponent implements OnInit {

  name = '';
  office = '';
  contact  = '';
  datenow = new Date();


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.office = this.route.snapshot.paramMap.get('office') as string;
    this.contact = this.route.snapshot.paramMap.get('contact') as string;
  }

}
