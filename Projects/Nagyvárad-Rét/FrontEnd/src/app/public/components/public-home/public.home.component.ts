import {Component, OnInit} from '@angular/core';
import {NapiIgeService} from '../../services/napi-ige.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.sass']
})

export class PublicHomeComponent implements OnInit {
  napiIge: {
    title: string,
    source: string,
    ige: string,
    magyarazat: string
  } = {
    title: 'Napi Ige',
    source: 'source',
    ige: 'ige',
    magyarazat: 'magyarazat'
  };

  constructor(private igeService: NapiIgeService) {}

  ngOnInit() {
    this.igeService.getNapiIge((ige) => {
      this.napiIge = ige;
    });
  }
}
