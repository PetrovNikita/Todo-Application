export default function searchReducer ({search = ''}, action) {
    switch (action.type) {
        case "SET_SEARCH": {
            return action.payload;
        }

        default: {
            return search;
        }
    }
};