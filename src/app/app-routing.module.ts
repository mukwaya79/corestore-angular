import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NavigationComponent } from './component/navigation/navigation.component';

import { WellboreComponent } from './forms/wellbore/wellbore.component';
import { WellsComponent } from './forms/wells/wells.component';
import { WellborecoreComponent } from './forms/wellborecore/wellborecore.component';
import { CategoryComponent } from './forms/category/category.component';


const routes: Routes = [{ path: '', redirectTo: 'home',  pathMatch: 'full'},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'navigation' , component:NavigationComponent},
  {path:'wells' , component:WellsComponent},
  {path:'wellbore' , component:WellboreComponent},
  {path:'wellborecore' , component:WellborecoreComponent},
  {path:'category' , component:CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
