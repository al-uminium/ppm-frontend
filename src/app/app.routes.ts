import { Routes } from '@angular/router';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { ExpenditureFormComponent } from './component/expenditure-form/expenditure-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BalanceComponent } from './component/balance/balance.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  {
    path: "", 
    component: LandingpageComponent
  },
  {
    path: "expenditure/create",
    component: ExpenditureFormComponent
  },
  {
    path: "expenditure/:id", 
    component: DashboardComponent, 
  },
  {
    path: "expenditure/:id/balance", component: BalanceComponent
  },
  {
    path: 'register',
    component: SignupFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', 
    component: LandingpageComponent
  },
];
