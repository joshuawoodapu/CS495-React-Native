import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as actions from '../actions';

class TasksScreen extends Component {
    static navigationOptions = {
        title: 'Tasks',
    };
    // This handles what happens when a single member is tapped
    onTaskPress(task) {
        // Dispatch an action to change the currently selected member in state
        this.props.taskChanged(task);

        // Navigate to the member page
        this.props.navigation.navigate('Task');
    }

    renderTasks() {
        return this.props.project.tasks.map((item) =>         
            <ListItem
                key={item.name}
                title={item.name}
                onPress={() => this.onTaskPress(item)}
            />
        );
    }

    render() {
        return (
            // The members from state are rendered into a scroll view
            <ScrollView>
                {this.renderTasks()}
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
    return { project: state.project };
}

export default connect(mapStateToProps, actions)(TasksScreen);
