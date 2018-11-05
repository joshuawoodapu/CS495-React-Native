import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import TeamScreen from './screens/TeamScreen';
import TeamMember from './screens/TeamMember';
import ProjectList from './screens/ProjectList';
import TasksScreen from './screens/TasksScreen';
import TaskDetail from './screens/TaskDetail';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
    {
      Teams: TeamsStack,
      Projects: ProjectsStack,
    },
    {
      
    }
    );
    return (
      <Provider>
        <MainNavigator />
      </Provider>
    );
  }
}

// The stack for a team 
const TeamsStack = createStackNavigator({
  Team: TeamScreen,
  Member: TeamMember,
});

// The stack for the projects s
const ProjectsStack = createStackNavigator({
  Project: ProjectList,
  Tasks: TasksScreen,
  Task: TaskDetail,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
