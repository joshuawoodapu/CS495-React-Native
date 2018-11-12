import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
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
    renderMembers() {
        return demoList.map((item) =>         
            <ListItem
                roundAvatar
                avatar={{title: item.initials}}
                key={item.name}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.props.navigation.navigate('Member')}
            />
        );
    }

    render() {
        return (
            // Going to put a temp button in, so we can move it move it
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


export default TeamScreen;
