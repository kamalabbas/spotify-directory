import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarRatingModule } from 'angular-star-rating';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemsGridComponent } from '../items-grid/items-grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemsGridComponent   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    StarRatingModule.forRoot()
  ]
})
export class HomeModule { }
