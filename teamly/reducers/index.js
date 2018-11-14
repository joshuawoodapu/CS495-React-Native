import { combineReducers } from 'redux';
import TeamReducer from './TeamReducer';
import ProjectReducer from './ProjectReducer';
import MemberReducer from './MemberReducer';

export default combineReducers({
    team: TeamReducer,
    member: MemberReducer,
    projects: ProjectReducer
});
