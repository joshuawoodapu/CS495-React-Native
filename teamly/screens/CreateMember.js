import React, { Component } from 'react';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Vibration } from 'react-native';
import { Text, View } from 'react-native';
import * as actions from '../actions';

class CreateMember extends Component {
    state = { name: '', initials: '', subtitle: '' };

    static navigationOptions = {
        title: 'Create New Member',
    };

    onButtonPress() {
        if (this.state.name !== '' && this.state.subtitle !== '' && this.state.initials !== '') {
            // The user put stuff in, so we move forward
            this.props.memberAdd(this.state.name, this.state.initials, this.state.subtitle);
            this.props.navigation.navigate('Team');
        }
        else {
            // If the user left one empty they both shake and the phone vibrates, for a good time
            Vibration.vibrate(100)
            this.nameInput.shake();
            this.initialsInput.shake();
            this.subtitleInput.shake();
        }
    }

    render() {
        return (
            <View>
                <FormLabel>Member Name</FormLabel>
                <FormInput 
                    ref={nameInput => this.nameInput = nameInput}
                    value={this.state.name} 
                    onChangeText={name => this.setState({ name })}
                    placeholder='Please enter the member name'
                    inputStyle={{ color: "black"}}
                />
                <FormLabel>Initials</FormLabel>
                <FormInput 
                    ref={initialsInput => this.initialsInput = initialsInput}
                    value={this.state.initials} 
                    onChangeText={initials => this.setState({ initials })}
                    placeholder='Please enter the members initials'
                    inputStyle={{ color: "black"}}
                />
                <FormLabel>Subtitle</FormLabel>
                <FormInput 
                    ref={subtitleInput => this.subtitleInput = subtitleInput}
                    value={this.state.subtitle} 
                    onChangeText={subtitle => this.setState({ subtitle })}
                    placeholder='Please enter the members title'
                    inputStyle={{ color: "black"}}
                />
                <Button 
                    raised
                    icon={{name: 'add'}}
                    title='Add'
                    onPress={this.onButtonPress.bind(this)}
                    buttonStyle={{backgroundColor: "limegreen"}}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { team: state.team };
}

export default connect(mapStateToProps, actions)(CreateMember);
