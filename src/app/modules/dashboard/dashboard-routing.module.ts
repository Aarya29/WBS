import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardWidgetsComponent } from './component/dashboard-widgets/dashboard-widgets.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'widget', component: DashboardWidgetsComponent },
      { path: '', redirectTo: '/dashboard/widget', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
