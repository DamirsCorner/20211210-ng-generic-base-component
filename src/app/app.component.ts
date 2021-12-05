import { Component } from '@angular/core';
import { ItemA, ItemB } from './item-list/item-list.model';

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

  itemClickA(item: ItemA) {
    this.itemA = item;
  }

  itemsB: ItemB[] = Array.from({ length: 5 }, (_, id) => ({
    label: `Item B ${id}`,
    valueB: `${id}`,
  }));

  itemB?: ItemB;

  itemClickB(item: ItemB) {
    this.itemB = item;
  }
}
