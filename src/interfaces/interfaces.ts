interface ITodo {
  id: string,
  label: string,
  important: boolean,
  done: boolean
}

interface ITodoListItem extends ITodo {
    toggleImportant(): void,
    onDelete(): void, 
    toggleDone(): void,
    changeLabel(id: string, labelValue: string): void
  };

interface ITodoListItemChanging extends ITodoListItem{
  changeItem(): void
}

interface ITodoList {
  items: Array<ITodo>,
  filter: string,
  search: string,
  toggleImportant(id: string): object, 
  toggleDone(id: string): object, 
  onDelete(id: string): object, 
  changeLabel(id: string, newLabel: string): object
}


export type {ITodo, ITodoListItem, ITodoListItemChanging, ITodoList};