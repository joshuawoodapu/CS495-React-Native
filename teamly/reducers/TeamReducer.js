import data from './team.json'
import {
    MEMBER_ADD
} from '../actions/types';

const INITIAL_STATE = data;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_ADD:
            const newId = state[state.length - 1].id + 1
            return [...state, {id:newId, name:action.payload.name, initials:action.payload.initials, subtitle:action.payload.subtitle}];
        default:
            return state;
    }
};
