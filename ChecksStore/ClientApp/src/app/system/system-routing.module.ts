import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { ProductCreateComponent } from './product-page/product-form/product-create/product-create.component';
import { AuthGuard } from '../shared/services/auth-guard.service';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ProductEditComponent } from './product-page/product-form/product-edit/product-edit.component';
import { UsersListComponent } from './users-page/users-list.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
    { path: 'system', component: SystemComponent, children: [
        { path: 'bill', component: BillPageComponent},
        { path: 'history', component: HistoryPageComponent},
        { path: 'planning', component: PlanningPageComponent},
        { path: 'products', component: ProductListComponent },
        { path: 'records', component: RecordsPageComponent},
        { path: 'users', component: UsersListComponent},
        { path: 'products/create', component:  ProductCreateComponent },
        { path: 'products/edit/:id', component:  ProductEditComponent },
        { path: 'test', component:  TestPageComponent }
    ]}
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class SystemRoutingModule {}