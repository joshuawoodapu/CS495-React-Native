import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Switch } from 'react-native';
import { Card } from 'react-native-elements';
import * as actions from '../actions';

class TaskDetail extends Component {
    state = { done: this.props.task.done };

    static navigationOptions = {
        title: 'Task Details',
      };

    onDoneToggle() {
        console.log(this.state.done);
        const newStatus = !this.state.done;
        this.props.taskStatusChanged(newStatus);
        const newTask = {...this.props.task, done: this.state.done};
        this.props.updateProjectWithTask(newTask);
        this.setState({ done: newStatus });
        //this.props.updateProjectsWithTask(this.props.project);
    };

    getAssignedName() {
        const assignedId = this.props.task.assigned;
        for (const i = 0; i < this.props.team.length; i++ )
            if (assignedId === this.props.team[i].id)
                return this.props.team[i].name;
        return "No one";
    };

    render() {
        const { name, desc } = this.props.task;

        return (
            <View>
                <Card>
                    <View>
                        <Text>{name}</Text>
                        <Text>{desc}</Text>
                        <Text>Assigned To: {this.getAssignedName()}</Text>
                    </View>
                </Card>
                <Card>
                    <View>
                        <Text>Task Completion: {this.state.done}</Text>
                        <Switch 
                            onValueChange = {() => this.onDoneToggle()}
                            value={this.state.done}
                        />
                    </View>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { task: state.task, team: state.team, project: state.project };
}

export default connect(mapStateToProps, actions)(TaskDetail);
