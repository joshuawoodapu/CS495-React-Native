import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import * as actions from '../actions';

class TeamMember extends Component {
    static navigationOptions = {
        title: 'Team Member',
      };

    render() {
        const { name, initials, subtitle } = this.props.member;

        return (
            <View>
                <Card>
                    <Text>{name}</Text>
                    <Text>{initials}</Text>
                    <Text>{subtitle}</Text>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { member: state.member };
}

export default connect(mapStateToProps, actions)(TeamMember);
