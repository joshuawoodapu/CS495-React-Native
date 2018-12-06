import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import * as actions from '../actions';

class TasksScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Tasks',
            headerRight: (
                <Button
                    onPress={navigation.getParam('shuffleTasks')}
                    icon={{
                        name: 'shuffle',
                        size: 15,
                        color: 'white'
                    }}
                    buttonStyle={{
                        backgroundColor: "deepskyblue",
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                        height: 40
                    }}
                    title="Shuffle Assigned"
                />
            ),
        }
    };
    // Gotta do some component mounting because of react navigation
    componentDidMount() {
        this.props.navigation.setParams({ shuffleTasks : this._shuffleTasks });
    }
    // This handles when the shuffle button is tapped
    _shuffleTasks = async () => {
        // Create a blank array off tasks
        const newTasks = [];
        // Find the number of team members on the team
        const numMems = this.props.team.length;
        newId = 0;
        // A new array to contain the user ids that have already been used, so someone doesn't get double assigned
        const usedMems = [];
        // Now we will loop over the tasks and randomly assign a team mem
        for (const i=0; i<this.props.project.tasks.length; i++)
            {
                notUnique = true;
                while (notUnique) {
                    newId = Math.floor(Math.random() * numMems);
                    if (!usedMems.includes(newId))
                    {
                        notUnique = false
                        usedMems.push(newId);
                    }
                }
                newTasks.push({...this.props.project.tasks[i], assigned: newId });
                console.log(newTasks);
            }
        try {
            await this.props.projectNewTasks(newTasks);
            await this.props.updateProjectsWithTask(this.props.project);
        }
        catch (err) {
            alert(err);
        }
    }
    // This handles what happens when a single member is tapped
    onTaskPress(task) {
        // Dispatch an action to change the currently selected member in state
        this.props.taskChanged(task);

        // Navigate to the member page
        this.props.navigation.navigate('Task');
    }
    onAddTaskPress() {
        // Navigate to the create task page
        this.props.navigation.navigate('CreateT');
    }

    // Get the assigned person and return a thing 
    getAssignedName(assignedId) {
        for (const i = 0; i < this.props.team.length; i++ )
        if (assignedId === this.props.team[i].id)
            return "Assigned: " + this.props.team[i].name;
        return "Assigned: No One";
    }

    renderTasks() {
        console.log(this.props.project.tasks);
        return this.props.project.tasks.map((item) =>         
            <ListItem
                key={item.name}
                title={item.name}
                subtitle={this.getAssignedName(item.assigned)}
                onPress={() => this.onTaskPress(item)}
                containerStyle={{ backgroundColor: `${item.done ?  'palegreen' : '#FFF'  }` }}
            />
        );
    }

    render() {
        return (
            // The tasks from state are rendered into a scroll view and an "add new" is rendered below
            <ScrollView>
                {this.renderTasks()}
                <ListItem 
                    title={'Add New Task'}
                    rightIcon={{name: 'add'}}
                    onPress={() => this.onAddTaskPress()}
                    containerStyle= {{ backgroundColor: 'white'}}
                />
            </ScrollView>
        );
    }
}

const styles = {
    buttonStyle: {
      backgroundColor: '#0288D1'
    }
};

const mapStateToProps = state => {
    return { project: state.project, team: state.team };
}

export default connect(mapStateToProps, actions)(TasksScreen);
