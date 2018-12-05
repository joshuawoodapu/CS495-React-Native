import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import * as actions from '../actions';

class TeamMember extends Component {
    static navigationOptions = {
        title: 'Team Member',
      };



    // Might get to rendering the tasks assigned to a person
    renderTasks() {

    };

    render() {
        const { name, initials, subtitle } = this.props.member;

        return (
            <View>
                <Card>
                    <Text>Name: {name}</Text>
                    <Text>Initials: {initials}</Text>
                    <Text>Title: {subtitle}</Text>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { member: state.member, projects: state.projects };
}

export default connect(mapStateToProps, actions)(TeamMember);
