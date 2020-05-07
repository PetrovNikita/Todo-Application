class service {
    constructor() {
        this._id = 10;
        this._items = [
            { id: 1, label: 'Drink Coffee', important: false, done: false },
            { id: 2, label: 'Learn React', important: true, done: false },
            { id: 3, label: 'Make Awesome App', important: false, done: false }
        ];

    }

    _createItem = (label) => {
        return {
          id: this.maxId++,
          label,
          important: false,
          done: false
        };
      }

    getItems() {
        return new Promise((res, rej) => {
            setTimeout(
                () => {
                    if (Math.random() > 1) rej(new Error("Error on server"))
                    else res(this._items);
                }
                , 700);
        });
    }

    addItem(label) {
        console.log('Item added: ', label);
    }

    postItems(items) {
        console.log("Items on server: ",items);
    }

}

export default new service();