import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printemp',
  templateUrl: './printemp.component.html',
  styleUrls: ['./printemp.component.scss']
})
export class PrintempComponent implements OnInit {
  name = '';
  office = '';
  datenow = new Date();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.office = this.route.snapshot.paramMap.get('office') as string;
  }

  ngAfterViewInit(): void {
    window.print();
  }
}
