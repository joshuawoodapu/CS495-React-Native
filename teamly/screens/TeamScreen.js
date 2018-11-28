import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import * as actions from '../actions';

class TeamScreen extends Component {
    static navigationOptions = {
        title: 'Team',
    };
    // This handles what happens when a single member is tapped
    onMemberPress(member) {
        // Dispatch an action to change the currently selected member in state
        this.props.memberChanged(member);

        // Navigate to the member page
        this.props.navigation.navigate('Member');
    }
    onAddMemberPress() {
        // Navigate to the create task page
        this.props.navigation.navigate('CreateM');
    }

    renderMembers() {
        return this.props.team.map((item) =>         
            <ListItem
                avatar={<Avatar 
                            rounded
                            title={item.initials}
                        />}
                key={item.name}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.onMemberPress(item)}
            />
        );
    }

    render() {
        return (
            // The members from state are rendered into a scroll view
            <ScrollView>
                {this.renderMembers()}
                <ListItem 
                    title={'Add New Team Member'}
                    rightIcon={{name: 'add'}}
                    onPress={() => this.onAddMemberPress()}
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
    return { team: state.team };
}

export default connect(mapStateToProps, actions)(TeamScreen);
