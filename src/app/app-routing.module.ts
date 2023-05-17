import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { GoalsComponent } from './goals/goals.component';
import { EmployeesComponent } from './employees/employees.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: EmployeesComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'goals', component: GoalsComponent },
      { path: 'services', component: ServicesComponent },
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ServicesComponent,
  ProductsComponent,
  HomeComponent,
  GoalsComponent,
  EmployeesComponent,
  ContactComponent,
  AboutComponent,
];
