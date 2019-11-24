import {actionTypes} from '../actions/actions.js';
import {cloneDeep} from "lodash";

const initialState = [];

const Reducer = (prevState = initialState, action) => {

    switch(action.type) {
        case(actionTypes.FETCHSHOPASYNC):
            let newState = [...action.productArr];
            return newState;
        default:
            return prevState;
    }
}

export default Reducer;