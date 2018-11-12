import React from 'react';
import { ListItem } from 'react-native-elements';

// Each list row item will expect an item to be passed into it 
const MemberListItem = ({ member }, onPress) => {
    const { name, subtitle } = member;

    return (
        <ListItem
            key={name}
            title={name}
            subtitle={subtitle}
            onPress={onPress}
        />
    )
}


export default MemberListItem;