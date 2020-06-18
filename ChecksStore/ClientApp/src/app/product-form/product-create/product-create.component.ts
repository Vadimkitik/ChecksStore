import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

    product: Product = new Product();    // добавляемый объект
    constructor(private productService: ProductService, private router: Router) { }
    save() {
        this.productService.createProduct(this.product).subscribe(data => this.router.navigateByUrl("/"));
    }
}