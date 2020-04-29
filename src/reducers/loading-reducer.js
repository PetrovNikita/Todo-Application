export default function loadingReducer ({loading = false}, action) {
    switch (action.type) {
        case "FETCH_ITEMS_REQUEST": {
            return true;
        }

        case "FETCH_ITEMS_SUCCESS": {
            return false;
        }

        case "FETCH_ITEMS_FAILURE": {
            return false;
        }


        default: {
            return loading;
        }
    }
}