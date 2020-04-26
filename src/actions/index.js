const loadItems = (items) => {
    return {
        type: "ITEMS_LOADING",
        payload: items
    };
} ;

const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        filter: filter
    }
}

const setSearch = (search) => {
    return {
        type: "SET_SEARCH",
        search: search
    }
}

export {loadItems, setFilter, setSearch};