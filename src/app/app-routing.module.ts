import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { GamestoryComponent } from './gamestory/gamestory.component';
import { ConvomodComponent } from './convomod/convomod.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'page',
    component: PageComponent,
    children: [
      { path: '', component: AvatarComponent, outlet: 'page' },
      { path: 'avatar', component: AvatarComponent, outlet: 'page' },
      { path: 'artwork', component: ArtworkComponent, outlet: 'page' },
      { path: 'gamestory', component: GamestoryComponent, outlet: 'page' },
      { path: 'convomod', component: ConvomodComponent, outlet: 'page' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
