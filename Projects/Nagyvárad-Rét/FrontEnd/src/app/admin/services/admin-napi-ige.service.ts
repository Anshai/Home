import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AdminNapiIgeService {

    constructor(private http: HttpClient) {}

    updateNapiIge(napiIge) {
        return this.http.post('http://localhost:3000/admin/napi-ige', napiIge);
    }

}
