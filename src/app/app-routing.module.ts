import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'work-project',
    canActivate: [authGuard],
    loadChildren: ()=>
      import('./modules/work-project/work-project.module').then(m => m.WorkProjectModule) 
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: ()=>
      import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
