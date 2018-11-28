import {
    UPDATE_PROJECTS
} from '../actions/types';

import data from './projects.json'

const INITIAL_STATE = data;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_PROJECTS:
            const newP = [];
            for (const i = 0; i < state.length; i++) {
                if (state[i].id !== action.payload.id)
                    newP.push(state[i]);
            }
            return [...newP, action.payload ]
        default:
            return state;
    }
};
