export default function itemsReducer ({items=[]}, action) {
    switch (action.type) {

        case "FETCH_ITEMS_REQUEST": {
            return [];
        }

        case "FETCH_ITEMS_SUCCESS": {
            return action.payload;
        }

        case "FETCH_ITEMS_FAILURE": {
            return [];
        }

        case "DELETE_ITEM": {
            return onDelete(items, action.payload);
        }

        case "ADD_ITEM": {
            return [...items, action.payload];
        }

        case "CHANGE_LABEL": {
            const {id, newLabel} = action.payload;
            return changeLabel(items, id, newLabel);
        }

        case "TOGGLE_DONE": {
            return toggleProperty(items, action.payload, 'done');
        }

        case "TOGGLE_IMPORTANT": {
            return toggleProperty(items, action.payload, 'important');
        }

        default: {
            return items;
        }
    }
}

function toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];
    //копируем элементы, чтоб не мутировать состояние
    const item = { ...arr[idx], [propName]: value } ;
    //slice, чтоб не мутировать состояние
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
};

function changeLabel(arr, id, newLabel) {
    const idx = arr.findIndex((item) => item.id === id);
    //копируем элементы, чтоб не мутировать состояние
    const item = { ...arr[idx], label: newLabel } ;
    //slice, чтоб не мутировать состояние
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
}

function onDelete (arr, id) {
    //копируем элементы, чтоб не мутировать состояние
    const newArr = [...arr];
    const idx = newArr.findIndex((item) => item.id === id);
    newArr.splice(idx, 1);
    return newArr;
};