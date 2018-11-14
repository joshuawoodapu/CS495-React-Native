import {
    MEMBER_CHANGED,
    MEMBER_CLEAR
} from './types';

export const memberChanged = (member) => {
    console.log(member);
    return {
        type: MEMBER_CHANGED,
        payload: member
    };
};

export const memberClear = () => {
    return {
        type: MEMBER_CLEAR
    }
};