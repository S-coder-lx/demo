import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { LogInComponent } from './log-in/log-in.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  {path:"login" ,component: LogInComponent},
  {path:"forgot",component:ForgotComponent}
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
