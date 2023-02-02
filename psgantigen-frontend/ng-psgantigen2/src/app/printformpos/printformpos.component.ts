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
  datenow = new Date();

  qrCode = '12345';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.office = this.route.snapshot.paramMap.get('office') as string;
    this.qrCode = this.route.snapshot.paramMap.get('qrcode') as string;
  }

  ngAfterViewInit(): void {
    window.print();
  }

}
