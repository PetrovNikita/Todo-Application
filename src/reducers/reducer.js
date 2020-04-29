import itemsReducer from "./items-reducer.js";
import filterReducer from "./filter-reducer.js";
import searchReducer from "./search-reducer.js";
import loadingReducer from "./loading-reducer.js";
import hasErrorReducer from "./has-error-reducer.js";

const reducer = (state = {}, action) => {
    console.log(action.type);
    return {
        items: itemsReducer(state, action),
        filter: filterReducer(state, action),
        search: searchReducer(state, action),
        loading: loadingReducer(state, action),
        hasError: hasErrorReducer(state, action)
    }
};


export default reducer;