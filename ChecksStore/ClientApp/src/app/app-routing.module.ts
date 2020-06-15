import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found.component';
import { ProductCreateComponent } from './product-form/product-create/product-create.component';
import { ProductEditComponent } from './product-form/product-edit/product-edit.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component:   ProductListComponent },
    { path: 'create', component:  ProductCreateComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component:  ProductEditComponent, canActivate: [AuthGuard] }
   // { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}