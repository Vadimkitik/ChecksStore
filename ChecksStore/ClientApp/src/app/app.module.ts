import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { JwtModule } from '@auth0/angular-jwt';



import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import  {AppRoutingModule} from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { SystemModule } from './system/system.module';

export function tokenGetter(){
    return localStorage.getItem("jwt");
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule,
        SystemModule,
        JwtModule.forRoot({
           config: {
               tokenGetter: tokenGetter,
               whitelistedDomains: ["localhost:5000"],
               blacklistedRoutes: []
           } 
        })
        ],
    declarations:
        [
            AppComponent,
            NotFoundComponent
        ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }