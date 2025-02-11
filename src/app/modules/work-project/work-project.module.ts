import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkProjectRoutingModule } from './work-project-routing.module';
import { WorkProjectComponent } from './component/work-project/work-project.component';
import { WorkProjectListComponent } from './component/work-project-list/work-project-list.component';
import { WorkProjectDetailsComponent } from './component/work-project-details/work-project-details.component';


@NgModule({
  declarations: [
    WorkProjectComponent,
    WorkProjectListComponent,
    WorkProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    WorkProjectRoutingModule
  ]
})
export class WorkProjectModule { }
