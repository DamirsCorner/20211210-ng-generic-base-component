import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemA, ItemB } from './item-list.model';

@Component({
  template: '',
})
export abstract class ItemListComponent<T extends Item> {
  @Input()
  items: T[] = [];

  @Output()
  itemClick: EventEmitter<T> = new EventEmitter<T>();
}

@Component({
  selector: 'app-itema-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemAListComponent extends ItemListComponent<ItemA> {}

@Component({
  selector: 'app-itemb-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemBListComponent extends ItemListComponent<ItemB> {}
