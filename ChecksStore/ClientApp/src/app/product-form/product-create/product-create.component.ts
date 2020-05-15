import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/productData.service';
import { Product } from 'src/app/models/product';

@Component({
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

    product: Product = new Product();    // добавляемый объект
    constructor(private dataService: ProductDataService, private router: Router) { }
    save() {
        this.dataService.createProduct(this.product).subscribe(data => this.router.navigateByUrl("/"));
    }
}