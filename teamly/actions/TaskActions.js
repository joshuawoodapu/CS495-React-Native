import {
    TASK_CHANGED,
    TASK_CLEAR
} from './types';

export const taskChanged = (task) => {
    console.log(task);
    return {
        type: TASK_CHANGED,
        payload: task
    };
};

export const taskClear = () => {
    return {
        type: TASK_CLEAR
    }
};