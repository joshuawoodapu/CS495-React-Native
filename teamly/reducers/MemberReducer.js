import {
    MEMBER_CHANGED,
    MEMBER_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    initials: '',
    subtitle: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_CHANGED:
            return action.payload;
        case MEMBER_CLEAR:
            return INITIAL_STATE;    
        default:
            return state;
    }
};
