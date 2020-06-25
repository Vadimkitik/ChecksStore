import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module'
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';

@NgModule({
    declarations: [
        SystemComponent,
        BillPageComponent,
        UsersPageComponent,
        RecordsPageComponent,
        HistoryPageComponent,
        PlanningPageComponent
    ],
    imports: [ 
        CommonModule, 
        SharedModule,
        SystemRoutingModule        
     ],
    exports: [],
    providers: [],
})
export class SystemModule {}