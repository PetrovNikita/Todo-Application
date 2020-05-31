class service {
    constructor() {
        this._id = 10;
        if (!localStorage.getItem('todos')) localStorage.setItem('todos', JSON.stringify([]));
        
/*        [
            { id: 1, label: 'Drink Coffee', important: false, done: false },
            { id: 2, label: 'Learn React', important: true, done: false },
            { id: 3, label: 'Make Awesome App', important: false, done: false }
        ];*/

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
                    else {
                        console.log(JSON.parse(localStorage.getItem('todos')));
                        res(JSON.parse(localStorage.getItem('todos')));
                    }
                }
                , 700);
        });
    }


    postItems(items) {
        console.log("Items saved.", items);
        localStorage.setItem('todos', JSON.stringify(items));
    }

}

export default new service();