import {
    TASK_CHANGED,
    TASK_CLEAR,
    TASK_STATUS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_CHANGED:
            return action.payload;
        case TASK_CLEAR:
            return INITIAL_STATE;
        case TASK_STATUS:
            return {...state, done: action.payload };
        default:
            return state;
    }
};
