import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { LandingComponent } from '../app/Components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignedGamesComponent } from './Components/landing/assigned-games/assigned-games.component';
import { MatButtonModule } from '@angular/material/button';
import {
  UpcominggamesComponent,
  UpcomingGamesDialog,
} from './Components/landing/upcoming-games/upcominggames.component';
import { RecentgamesComponent } from './Components/landing/recentgames/recentgames.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/landing/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Components/signup/signup.component';
import { AssignedGamesDialog } from './Components/landing/assigned-games/assigned-games.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { MatTableModule } from '@angular/material/table';
import { CreateNewGameComponent } from './Components/schedule/create-new-game/create-new-game.component';
import { MatSelectModule } from '@angular/material/select';
import { EditGameComponent } from './Components/schedule/edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AssignedGamesComponent,
    UpcominggamesComponent,
    RecentgamesComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    AssignedGamesDialog,
    UpcomingGamesDialog,
    ScheduleComponent,
    CreateNewGameComponent,
    EditGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'create-new-game', component: CreateNewGameComponent },
      { path: 'edit-game', component: EditGameComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
