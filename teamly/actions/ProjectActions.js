import {
    PROJECT_CHANGED,
    PROJECT_CLEAR,
    PROJECT_NEW_TASKS,
    ADD_TASK,
    UPDATE_PROJECTS,
    UPDATE_PROJECT
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
    };
};

export const addTask = (name, desc, assigned) => {
    console.log(name)
    return {
        type: ADD_TASK,
        payload: {name:name, desc:desc, assigned:assigned}
    };
};

export const updateProjectWithTask = (task) => {
    console.log("This is from the updateProjectWithTask:")
    console.log(task)
    return {
        type: UPDATE_PROJECT,
        payload: task
    }
}

export const updateProjectsWithTask = (project) => {
    console.log("This is from the updateProjectsWithTask:")
    console.log(project)
    return {
        type: UPDATE_PROJECTS,
        payload: project
    };
};

export const projectNewTasks = (newTasks) => {
    return {
        type: PROJECT_NEW_TASKS,
        payload: newTasks
    }
}
