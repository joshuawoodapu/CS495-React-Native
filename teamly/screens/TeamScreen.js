import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import * as actions from '../actions';
import MemberListItem from '../components/MemberListItem';

// Hard coded list for team members, to be removed once creation works
const demoList = [
    {
        name: 'Oliver Seery',
        initials: 'OS',
        subtitle: 'Super Team Lead'
    },
    {
        name: 'Sabrina Seery',
        initials: 'SS',
        subtitle: 'Oliver Lead'
    },
    {
        name: 'Campbell Ong',
        initials: 'CO',
        subtitle: 'Document Lead'
    },
    {
        name: 'Mattaniah Aytenfsu',
        initials: 'MA',
        subtitle: 'Graphic Design Lead'
    },
    {
        name: 'Josh Wood',
        initials: 'JW',
        subtitle: 'Team Lead'
    },
    {
        name: 'Rachel Jacoby',
        initials: 'RJ',
        subtitle: 'Emotional Support Lead'
    },
    {
        name: 'Elyse Shackleton',
        initials: 'ES',
        subtitle: 'Presentation Lead'
    }
]

class TeamScreen extends Component {
    static navigationOptions = {
        title: 'Team',
      };
    // This handles what happens when a single member is tapped
    onMemberPress(member) {
        // Dispatch an action to change the currently selected member in state
        //console.log(member);
        this.props.memberChanged(member);

        // Navigate to the member page
        this.props.navigation.navigate('Member')
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
