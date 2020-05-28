﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';



import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCreateComponent } from './product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-form/product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found.component';
import { ProductService } from './shared/services/product.service';
import  {AppRoutingModule} from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UsersService } from './shared/services/users.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule
        ],
    declarations:
        [
            AppComponent,
            ProductFormComponent,
            ProductCreateComponent,
            ProductListComponent,
            ProductEditComponent,
            NotFoundComponent
        ],
    providers: [ProductService, UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }