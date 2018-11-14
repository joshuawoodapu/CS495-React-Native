import { combineReducers } from 'redux';
import TeamReducer from './TeamReducer';
import ProjectsReducer from './ProjectsReducer';
import MemberReducer from './MemberReducer';
import ProjectReducer from './ProjectReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
    team: TeamReducer,
    member: MemberReducer,
    projects: ProjectsReducer,
    project: ProjectReducer,
    task: TaskReducer
});
