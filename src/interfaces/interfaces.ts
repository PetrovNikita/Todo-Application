interface ITodoListItem {
    id: string,
    label: string,
    important: boolean,
    done: boolean,
    toggleImportant(): void,
    onDelete(): void, 
    toggleDone(): void,
    changeLabel(id: string, labelValue: string): void
  };

interface ITodoListItemChanging extends ITodoListItem{
  changeItem(): void
}



export type {ITodoListItem, ITodoListItemChanging};