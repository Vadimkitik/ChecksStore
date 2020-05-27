import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/shared/services/productData.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

    product: Product = new Product();    // добавляемый объект
    constructor(private dataService: ProductDataService, private router: Router) { }
    save() {
        this.dataService.createProduct(this.product).subscribe(data => this.router.navigateByUrl("/"));
    }
}