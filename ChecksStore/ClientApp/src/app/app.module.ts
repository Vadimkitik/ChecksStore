import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';



import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCreateComponent } from './product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-form/product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found.component';
import { ProductDataService } from './productData.service';
import  {AppRoutingModule} from './app-routing.module';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        AppRoutingModule
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
    providers: [ProductDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }