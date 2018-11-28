import data from './team.json'
import {
    MEMBER_ADD
} from '../actions/types';

const INITIAL_STATE = data;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_ADD:
            return {...state }    
        default:
            return state;
    }
};
