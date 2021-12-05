export interface Item {
  label: string;
}

export interface ItemA extends Item {
  valueA: number;
}

export interface ItemB extends Item {
  valueB: string;
}
