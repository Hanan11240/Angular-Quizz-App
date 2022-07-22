import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddQuizComponent } from './admin/components/add-quiz/add-quiz.component';
import { AddQuizComponent } from './modules/admin/components/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { AddTeamsComponent } from './modules/admin/components/add-teams/add-teams.component';
import { PlayQuizComponent } from './modules/shared/components/play-quiz/play-quiz.component';
import { AddOrganizationComponent } from './modules/admin/components/add-organization/add-organization.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'admin/add-quiz',component:AddQuizComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'authenticate',component:AuthComponent},
  {path:'add-teams',component:AddTeamsComponent},
  {path:'play-quiz/:id/:teamsId/:teamId',component:PlayQuizComponent},
  {path:'add-organization',component:AddOrganizationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
