import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './check-list/check-list.component';
import { NotFoundComponent } from './not-found.component';
import { CheckCreateComponent } from './check-form/check-create/check-create.component';
import { CheckEditComponent } from './check-form/check-edit/check-edit.component';

const appRoutes: Routes = [
    { path: '', component: CheckListComponent },
    { path: 'create', component: CheckCreateComponent },
    { path: 'edit/:id', component: CheckEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}