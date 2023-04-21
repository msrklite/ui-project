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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
