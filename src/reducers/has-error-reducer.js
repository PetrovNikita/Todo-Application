export default function hasErrorReducer ({hasError = false}, action) {
    switch (action.type) {
        case "FETCH_ITEMS_REQUEST": {
            return false;
        }

        case "FETCH_ITEMS_SUCCESS": {
            return false;
        }

        case "FETCH_ITEMS_FAILURE": {
            return true;
        }


        default: {
            return hasError;
        }
    }
}