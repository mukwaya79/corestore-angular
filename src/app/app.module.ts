import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { LoginComponent } from './component/login/login.component';

import { WellboreComponent } from './forms/wellbore/wellbore.component';
import { WellsComponent } from './forms/wells/wells.component';
import { WellborecoreComponent } from './forms/wellborecore/wellborecore.component';
import { CategoryComponent } from './forms/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    WellsComponent,
    WellboreComponent,
    WellborecoreComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
