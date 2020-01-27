import {Injectable} from "@angular/core";
import {NapiIgeService} from "./napi-ige.service";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {NapiIge} from "../models/napi-ige.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NapiIgeResolverService implements Resolve<NapiIge> {
    constructor(private igeService: NapiIgeService, router: Router) {}

    resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<NapiIge> | Promise <NapiIge> | NapiIge {
        return this.igeService.getNapiIge();
    }

}
