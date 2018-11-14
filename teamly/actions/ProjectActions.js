import {
    PROJECT_CHANGED,
    PROJECT_CLEAR
} from './types';

export const projectChanged = (project) => {
    console.log(project);
    return {
        type: PROJECT_CHANGED,
        payload: project
    };
};

export const projectClear = () => {
    return {
        type: PROJECT_CLEAR
    }
};