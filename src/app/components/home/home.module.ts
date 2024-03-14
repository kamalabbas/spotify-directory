import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarRatingModule } from 'angular-star-rating';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    // NgxSkeletonLoaderModule,
    StarRatingModule.forRoot(),
    SkeletonComponent
  ]
})
export class HomeModule { }
