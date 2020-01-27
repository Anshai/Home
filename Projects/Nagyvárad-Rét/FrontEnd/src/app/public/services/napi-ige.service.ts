import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NapiIge} from '../models/napi-ige.model';

@Injectable({providedIn: 'root'})
export class NapiIgeService {
  constructor(private http: HttpClient) {}

  getNapiIge() {
    return this.http.get<NapiIge>('http://localhost:3000/home/napi-ige');
  }
}
