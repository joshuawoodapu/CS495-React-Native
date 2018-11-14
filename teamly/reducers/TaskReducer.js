import {
    TASK_CHANGED,
    TASK_CLEAR
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_CHANGED:
            return action.payload;
        case TASK_CLEAR:
            return INITIAL_STATE;    
        default:
            return state;
    }
};
