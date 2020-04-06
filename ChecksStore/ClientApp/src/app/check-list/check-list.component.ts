import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Check } from '../models/check';



@Component({
    templateUrl: './check-list.component.html',
    styleUrls: ['check-list.component.css']
})
export class CheckListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'date', 'time', 'price', 'button'];
    dataSource: Check[];


    constructor(private dataService: DataService) { }
    

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getChecks().subscribe((data: Check[]) => this.dataSource = data);
    }
    delete(id: number) {
        this.dataService.deleteCheck(id).subscribe(data => this.load());
    }
}