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

    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name')||'';
      this.office = params.get('office')||'';
      this.qrCode = 'http://192.168.64.150:22211/visit/' + params.get('qrcode')||'';
    })

  }

  ngAfterViewInit(): void {
    window.print();
  }

}
