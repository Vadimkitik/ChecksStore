import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Check } from '../models/check';

@Component({
    templateUrl: './check-list.component.html'
})
export class CheckListComponent implements OnInit {

    checks: Check[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getChecks().subscribe((data: Check[]) => this.checks = data);
    }
    delete(id: number) {
        this.dataService.deleteCheck(id).subscribe(data => this.load());
    }
}