import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule]
})
export class SkeletonComponent {
  @Input() loading: boolean = false;
}
