import { combineReducers } from 'redux';
import TeamReducer from './TeamReducer';
import ProjectReducer from './ProjectReducer';

export default combineReducers({
    team: TeamReducer,
    projects: ProjectReducer
});
