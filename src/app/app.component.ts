import { Component } from '@angular/core';
import { Item, ItemA, ItemB } from './item-list/item-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  itemsA: ItemA[] = Array.from({ length: 5 }, (_, id) => ({
    label: `Item A ${id}`,
    valueA: id,
  }));

  itemA?: ItemA;

  itemClickA(item: Item) {
    this.itemA = item as ItemA;
  }

  itemsB: ItemB[] = Array.from({ length: 5 }, (_, id) => ({
    label: `Item B ${id}`,
    valueB: `${id}`,
  }));

  itemB?: ItemB;

  itemClickB(item: Item) {
    this.itemB = item as ItemB;
  }
}
