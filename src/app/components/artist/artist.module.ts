import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MatIconModule
  ]
})
export class ArtistModule { }
