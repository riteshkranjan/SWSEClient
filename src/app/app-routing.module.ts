import { SearchComponent } from './search/search.component';
import { RouterModule, Routes }  from '@angular/router';
import { NgModule }              from '@angular/core';
import { SalesOrdersComponent } from './sales-orders/sales-orders.component';
import { ResidentialComponent } from './residential/residential.component';

const appRoutes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'residential', component: ResidentialComponent },
    { path: 'salesorders', component: SalesOrdersComponent },
    { path: '',redirectTo: '/search', pathMatch: 'full'
  },
    
  ];
   
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}