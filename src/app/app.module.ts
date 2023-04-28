import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { GamestoryComponent } from './gamestory/gamestory.component';
import { ConvomodComponent } from './convomod/convomod.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    NavComponent,
    AvatarComponent,
    ArtworkComponent,
    GamestoryComponent,
    ConvomodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({ apiKey: "AIzaSyCHxfCrDc-bXY-2XzG9ghrmgst5eJ_AB-E", authDomain: "stushare-webapp.firebaseapp.com", projectId: "stushare-webapp", storageBucket: "stushare-webapp.appspot.com", messagingSenderId: "722687313547", appId: "1:722687313547:web:6febf8d1a6b246b82a768e", measurementId: "G-E81RGZWTXH" }), AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
