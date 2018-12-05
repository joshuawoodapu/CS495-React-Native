import {
    TASK_CHANGED,
    TASK_CLEAR,
    TASK_STATUS
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

export const taskStatusChanged = (status) => {
    console.log(status);
    return {
        type: TASK_STATUS,
        payload: status
    };
};