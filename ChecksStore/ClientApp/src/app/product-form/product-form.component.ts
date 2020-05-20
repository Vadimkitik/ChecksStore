﻿import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
    @Input() product: Product;
}