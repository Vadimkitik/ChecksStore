import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Check } from 'src/app/models/check';

@Component({
    templateUrl: './check-edit.component.html'
})
export class CheckEditComponent implements OnInit {

    id: number;
    check: Check;    // изменяемый объект
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getCheck(this.id)
                .subscribe((data: Check) => {
                    this.check = data;
                    if (this.check != null) this.loaded = true;
                });
    }

    save() {
        this.dataService.updateCheck(this.check).subscribe(data => this.router.navigateByUrl("/"));
    }
}