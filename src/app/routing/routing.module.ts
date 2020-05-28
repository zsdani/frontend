import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from '../issue-list/issue-list.component';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { UserComponent } from '../user/user.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'issues/new',
    component: IssueFormComponent
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
})
export class RoutingModule { }
