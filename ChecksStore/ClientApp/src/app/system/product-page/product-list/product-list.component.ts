import { Component, OnInit, ContentChild, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {    
    productDate;
    displayedColumns: string[] = ['name', 'type', 'price', 'count', 'button'];
    dataSource: MatTableDataSource<Product>;
    itemsPerPage: number[];
    userRoleAdmin = false;   

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;  

    constructor(
        private dataService: ProductService, 
        private token: TokenStorageService,
        private authService: AuthService
        ) 
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