import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent {
  @Input() artists: any[] = [];
}
