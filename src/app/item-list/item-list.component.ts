import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item-list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input()
  items: Item[] = [];

  @Output()
  itemClick: EventEmitter<Item> = new EventEmitter<Item>();
}
