import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducers from "./reducers";
import thunk from "redux-thunk"

export const store = createStore(
    reducers,
    // default state 
    {},
    applyMiddleware(thunk)
)

