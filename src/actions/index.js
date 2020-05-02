const fetchItemsRequest = () => ({ type: "FETCH_ITEMS_REQUEST"});

const fetchItemsSuccess = (items) => ({ type: "FETCH_ITEMS_SUCCESS", payload: items});

const fetchItemsFailure = () => ({ type: "FETCH_ITEMS_FAILURE"});

const deleteItem = (id) => ({ type: "DELETE_ITEM", payload: id});

const addItem = (item) => ({ type: "ADD_ITEM", payload: item});

const setFilter = (filter) => ({ type: "SET_FILTER", payload: filter });

const setSearch = (search) => ({ type: "SET_SEARCH", payload: search });

const toggleDone = (id) => ({ type: "TOGGLE_DONE", payload: id });

const toggleImportant = (id) => ({ type: "TOGGLE_IMPORTANT", payload: id});

const changeLabel = (id, newLabel) => ({type: "CHANGE_LABEL", payload: {id: id, newLabel: newLabel} });

const fetchItems = (service) => () => (dispatch) => {
    dispatch( fetchItemsRequest() );
    service.getItems()
        .then((items) => dispatch( fetchItemsSuccess(items) ))
        .catch((err) => dispatch(fetchItemsFailure() ))
};

export {
    fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure, fetchItems, deleteItem, addItem,
    setFilter, setSearch, toggleDone, toggleImportant, changeLabel
};