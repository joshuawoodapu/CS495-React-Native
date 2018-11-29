import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Switch } from 'react-native';
import { Card } from 'react-native-elements';
import * as actions from '../actions';

class TaskDetail extends Component {
    state = { done: false };

    static navigationOptions = {
        title: 'Task Details',
      };

    onDoneToggle() {
        console.log(this.props.task.done);
        this.setState({ done: !this.state.done });
    };

    render() {
        const { name, desc, assigned } = this.props.task;

        return (
            <View>
                <Card>
                    <View>
                        <Text>{name}</Text>
                        <Text>{desc}</Text>
                        <Text>{assigned}</Text>
                    </View>
                </Card>
                <Card>
                    <View>
                        <Text>Done?</Text>
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
    return { task: state.task, team: state.team };
}

export default connect(mapStateToProps, actions)(TaskDetail);
