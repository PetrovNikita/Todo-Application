export default function filterReducer ({filter='all'}, action) {
    switch (action.type) {
        case "SET_FILTER": {
            return action.payload;
        }

        default: {
            return filter;
        }
    }
}