import {
    MEMBER_ADD
} from './types';

export const memberAdd = (name, initials, subtitle) => {
    return {
        type: MEMBER_ADD,
        payload: {name:name, initials:initials, subtitle:subtitle}
    };
};
