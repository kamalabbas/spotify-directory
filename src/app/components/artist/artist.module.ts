import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MatIconModule,
    SkeletonComponent
  ]
})
export class ArtistModule { }
