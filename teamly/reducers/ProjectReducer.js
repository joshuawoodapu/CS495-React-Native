import {
    PROJECT_CHANGED,
    PROJECT_CLEAR,
    ADD_TASK
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROJECT_CHANGED:
            return action.payload;
        case PROJECT_CLEAR:
            return INITIAL_STATE;
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, {desc: action.payload.desc, name: action.payload.name, assigned: action.payload.assigned, done: false}]};
        default:
            return state;
    }
};
