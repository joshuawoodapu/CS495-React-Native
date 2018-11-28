import React, { Component } from 'react';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Vibration } from 'react-native';
import { Text, View } from 'react-native';
import * as actions from '../actions';

class CreateMember extends Component {
    state = { name: '', desc: '' };

    static navigationOptions = {
        title: 'Create New Task',
    };

    onButtonPress() {
        if (this.state.name !== '' && this.state.desc !== '') {
            // The user put stuff in, so we move forward
            const oldProject = this.props.project;
            this.props.addTask(this.state.name, this.state.desc, this.props.project.id, this.props.project.title);
            const newProject = {...oldProject, tasks: [...oldProject.tasks, {desc: this.state.desc, name: this.state.name}]};
            this.props.updateProjectsWithTask(newProject);
            this.props.navigation.navigate('Tasks');
        }
        else {
            // If the user left one empty they both shake, for a good time
            Vibration.vibrate(100)
            this.nameInput.shake();
            this.descInput.shake();
        }
    }

    render() {
        return (
            <View>
                <FormLabel>Task Name</FormLabel>
                <FormInput 
                    ref={nameInput => this.nameInput = nameInput}
                    value={this.state.name} 
                    onChangeText={name => this.setState({ name })}
                />
                <FormLabel>Task Description</FormLabel>
                <FormInput 
                    ref={descInput => this.descInput = descInput}
                    value={this.state.desc} 
                    onChangeText={desc => this.setState({ desc })}
                />
                <Button 
                    raised
                    icon={{name: 'add'}}
                    title='Add'
                    onPress={this.onButtonPress.bind(this)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { project: state.project };
}

export default connect(mapStateToProps, actions)(CreateMember);
