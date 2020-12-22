import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';
import { LandingComponent } from '../app/Components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignedGamesComponent } from './Components/assigned-games/assigned-games.component';
import { MatButtonModule} from '@angular/material/button';
import { UpcominggamesComponent } from './Components/upcoming-games/upcominggames/upcominggames.component';
import { RecentgamesComponent } from './Components/recentgames/recentgames/recentgames.component';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AssignedGamesComponent,
    UpcominggamesComponent,
    RecentgamesComponent
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
    RouterModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
