import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuizComponent } from './modules/admin/components/add-quiz/add-quiz.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddTeamsComponent } from './modules/admin/components/add-teams/add-teams.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TeamInfoComponent } from './modules/shared/components/team-info/team-info.component';
import { PlayQuizComponent } from './modules/shared/components/play-quiz/play-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgChartsModule } from 'ng2-charts';
import {MatDividerModule} from '@angular/material/divider'
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddOrganizationComponent } from './modules/admin/components/add-organization/add-organization.component';



@NgModule({
  declarations: [
 
    AppComponent,
    AddQuizComponent,
    AdminDashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AddTeamsComponent,
    TeamInfoComponent,
    PlayQuizComponent,
    AddOrganizationComponent,
    


  ],
  imports: [
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule,
    NgChartsModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
