import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NapiIgeService {
  napiIge: any;
  constructor(private http: HttpClient) {}

  getNapiIge(cb) {
    this.http.get('../../../assets/data/napi-ige/napi-ige.json')
      .subscribe(res => {
        cb(res);
      });
  }
}
