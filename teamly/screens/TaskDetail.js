import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import * as actions from '../actions';

class TeamMember extends Component {
    static navigationOptions = {
        title: 'Task Details',
      };

    render() {
        const { name, desc } = this.props.task;

        return (
            <View>
                <Text>{name}</Text>
                <Text>{desc}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { task: state.task };
}

export default connect(mapStateToProps, actions)(TeamMember);
