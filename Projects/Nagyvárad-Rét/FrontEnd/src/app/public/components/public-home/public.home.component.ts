import {Component, OnInit} from '@angular/core';

import {NapiIge} from "../../models/napi-ige.model";
import {ActivatedRoute} from "@angular/router";
import {NapiIgeService} from "../../services/napi-ige.service";

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.sass']
})

export class PublicHomeComponent implements OnInit {
  napiIge: NapiIge = new NapiIge();

  constructor(private route: ActivatedRoute,
              private igeService: NapiIgeService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.napiIge = data.napiIge;
    });
  }
}
