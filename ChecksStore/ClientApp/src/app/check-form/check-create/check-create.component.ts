import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Check } from 'src/app/models/check';

@Component({
    templateUrl: './product-create.component.html'
})
export class CheckCreateComponent {

    check: Check = new Check();    // добавляемый объект
    constructor(private dataService: DataService, private router: Router) { }
    save() {
        this.dataService.createCheck(this.check).subscribe(data => this.router.navigateByUrl("/"));
    }
}