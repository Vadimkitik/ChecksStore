import { Component, OnInit, ContentChild, ViewChild } from '@angular/core';
import { ProductDataService } from '../productData.service';
import { Product } from '../models/product';

import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    productDate;
    displayedColumns: string[] = ['name', 'type', 'price', 'count', 'button'];
    dataSource: MatTableDataSource<Product>;
    itemsPerPage: number[];
   

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  

    constructor(private dataService: ProductDataService) 
    {
        this.itemsPerPage = [10, 25, 50, 100];
    }
    
    
    ngOnInit() {   
        this.load();
        }
        

    load() {
        this.dataService.getProducts().subscribe((products: Product[]) => {
            this.dataSource = new MatTableDataSource(products);
             this.dataSource.paginator = this.paginator;
             this.dataSource.sort = this.sort;
            });
    }
    delete(id: number) {
        this.dataService.deleteProduct(id).subscribe(data => this.load());
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
      }
}