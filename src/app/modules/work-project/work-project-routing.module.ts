import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkProjectComponent } from './component/work-project/work-project.component';
import { WorkProjectListComponent } from './component/work-project-list/work-project-list.component';
import { WorkProjectDetailsComponent } from './component/work-project-details/work-project-details.component';

const routes: Routes = [
  {path: '', component: WorkProjectComponent, children: [
    {path:'work-project-list', component: WorkProjectListComponent},
    {path:'work-project-details', component: WorkProjectDetailsComponent},
    {path:'', redirectTo: '/work-project/work-project-list', pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkProjectRoutingModule { }
