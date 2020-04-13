import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';



import { AppComponent } from './app.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { CheckCreateComponent } from './check-form/check-create/check-create.component';
import { CheckEditComponent } from './check-form/check-edit/check-edit.component';
import { CheckListComponent } from './check-list/check-list.component';
import { NotFoundComponent } from './not-found.component';
import { DataService } from './data.service';
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
            CheckFormComponent,
            CheckCreateComponent,
            CheckListComponent,
            CheckEditComponent,
            NotFoundComponent
        ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }