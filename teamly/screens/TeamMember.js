import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import * as actions from '../actions';

class TeamMember extends Component {
    static navigationOptions = {
        title: this.props.member.name,
      };

    render() {
        const { name } = this.props.member;
        console.log(name);
        console.log(this.props.member);

        return (
            <View>
                <Text>{name}</Text>
                <Text>{name}</Text>
                <Text>{name}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { member: state.member };
}

export default connect(mapStateToProps, actions)(TeamMember);
