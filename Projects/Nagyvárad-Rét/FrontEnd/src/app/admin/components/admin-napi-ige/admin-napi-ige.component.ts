import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AdminNapiIgeService} from "../../services/admin-napi-ige.service";
import {error} from "util";

@Component({
    selector: 'app-admin-napi-ige',
    templateUrl: './admin-napi-ige.component.html',
    styleUrls: ['./admin-napi-ige.component.sass']
})

export class AdminNapiIgeComponent {

    constructor(private adminNapiIge: AdminNapiIgeService) {}

    napiIgeForm = new FormGroup({
        ige: new FormControl('', Validators.required),
        source: new FormControl('', Validators.required),
        magyarazat: new FormControl('', Validators.required)
    });

    onSubmit() {
        console.log(this.napiIgeForm);
        this.adminNapiIge.updateNapiIge(this.napiIgeForm.value).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }
}
