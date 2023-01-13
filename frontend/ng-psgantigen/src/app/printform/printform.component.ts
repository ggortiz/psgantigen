import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printform',
  templateUrl: './printform.component.html',
  styleUrls: ['./printform.component.scss']
})
export class PrintformComponent implements OnInit {

  name = '';
  office = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.office = this.route.snapshot.paramMap.get('office') as string;

  }

}
