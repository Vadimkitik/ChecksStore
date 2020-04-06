import { Component, OnInit, ContentChild } from '@angular/core';
import { DataService } from '../data.service';
import { Check } from '../models/check';

import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    templateUrl: './check-list.component.html',
    styleUrls: ['check-list.component.css']
})
export class CheckListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'date', 'time', 'price', 'button'];
    dataSource: MatTableDataSource<Check>;
    
   

    @ContentChild(MatPaginator) paginator: MatPaginator;
    @ContentChild(MatSort) sort: MatSort;
  

    constructor(private dataService: DataService)   {  }
    

    ngOnInit() {
        this.load();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    load() {
        this.dataService.getChecks().subscribe((checks: Check[]) =>{ this.dataSource = new MatTableDataSource(checks)});
    }
    delete(id: number) {
        this.dataService.deleteCheck(id).subscribe(data => this.load());
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
      }
}