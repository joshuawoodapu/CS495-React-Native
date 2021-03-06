import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Icon } from 'react-native-elements';
import { store, persistor } from './store';
import TeamScreen from './screens/TeamScreen';
import TeamMember from './screens/TeamMember';
import ProjectList from './screens/ProjectList';
import TasksScreen from './screens/TasksScreen';
import TaskDetail from './screens/TaskDetail';
import LoadingView from './screens/LoadingView';
import CreateTask from './screens/CreateTask';
import CreateMember from './screens/CreateMember';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
    {
      Teams: {
        screen: TeamsStack,
        navigationOptions: {
          tabBarLabel:'Team',
          tabBarIcon: ({ tintColor }) => (
            <Icon name='people' size={30} color={tintColor} />
          )
        }
      },
      Projects: { 
        screen: ProjectsStack,
        navigationOptions: {
          tabBarLabel:'Projects',
          tabBarIcon: ({ tintColor }) => (
            <Icon name='work' size={30} color={tintColor} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: 'firebrick',
        inactiveTintColor: 'gray',
      },
    }
  );
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

// The stack for a team 
const TeamsStack = createStackNavigator({
  Team: TeamScreen,
  CreateM: CreateMember, 
  Member: TeamMember,
});

// The stack for the projects s
const ProjectsStack = createStackNavigator({
  Project: ProjectList,
  Tasks: TasksScreen,
  CreateT: CreateTask,
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
