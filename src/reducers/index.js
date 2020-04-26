const initialState = {
    items: [],
    filter: 'all',
    search: '',
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ITEMS_LOADING": {
            console.log("ITEMS_LOADING");
            return {...state, items: action.payload};
        }

        case "SET_FILTER": {
            console.log("SET_FILTER");
            return {...state, filter: action.filter};
        }

        case "SET_SEARCH": {
            console.log("SET_SEARCH");
            return {...state, search: action.search};
        }

        default: {
            console.log('default');
            return state;
        }
    };
};

export default reducer;