import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardWidgetsComponent } from './component/dashboard-widgets/dashboard-widgets.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardWidgetsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
