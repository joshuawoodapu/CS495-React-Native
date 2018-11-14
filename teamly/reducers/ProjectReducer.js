import {
    PROJECT_CHANGED,
    PROJECT_CLEAR
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROJECT_CHANGED:
            return action.payload;
        case PROJECT_CLEAR:
            return INITIAL_STATE;    
        default:
            return state;
    }
};
