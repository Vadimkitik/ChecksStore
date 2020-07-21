import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module'
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirectice } from './shared/directives/dropdown.directive';
import { ProductFormComponent } from './product-page/product-form/product-form.component';
import { ProductCreateComponent } from './product-page/product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-page/product-form/product-edit/product-edit.component';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { UsersListComponent } from './users-page/users-list.component';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';

@NgModule({
    declarations: [
        SystemComponent,
        BillPageComponent,
        RecordsPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirectice,
        ProductFormComponent,
        ProductCreateComponent,
        ProductListComponent,
        ProductEditComponent,
        UsersListComponent,
        BillCardComponent,
        CurrencyCardComponent
    ],
    imports: [ 
        CommonModule, 
        SharedModule,
        SystemRoutingModule,
        MaterialModule       
     ],
    exports: [],
    providers: [],
})
export class SystemModule {}