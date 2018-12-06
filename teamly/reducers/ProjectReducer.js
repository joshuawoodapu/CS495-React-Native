import {
    PROJECT_CHANGED,
    PROJECT_CLEAR,
    ADD_TASK,
    UPDATE_PROJECT,
    PROJECT_NEW_TASKS
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
        case UPDATE_PROJECT:
            const newP = {...state, tasks: []};
            for (const i = 0; i < state.tasks.length; i++) {
                if (state.tasks[i].name !== action.payload.name)
                    newP.tasks.push(state.tasks[i]);
            }
            return {...newP, tasks: [...newP.tasks, action.payload] }
        case PROJECT_NEW_TASKS:
            return {...state, tasks: [...action.payload]};
        default:
            return state;
    }
};
