import React, { Component } from 'react';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Vibration, View, Picker } from 'react-native';
import * as actions from '../actions';

class CreateMember extends Component {
    state = { name: '', desc: '', assigned: '' };

    static navigationOptions = {
        title: 'Create New Task',
    };

    onButtonPress() {
        if (this.state.name !== '' && this.state.desc !== '') {
            // The user put stuff in, so we move forward
            const oldProject = this.props.project;
            this.props.addTask(this.state.name, this.state.desc, this.state.assigned);
            const newProject = {...oldProject, tasks: [...oldProject.tasks, {desc: this.state.desc, name: this.state.name, assigned: this.state.assigned, done: false}]};
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

    renderTeamPickers() {
        return this.props.team.map((item) =>         
            <Picker.Item label={item.name} value={item.id} key={item.id} />
        );
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
                <Picker
                    selectedValue={this.state.assigned}
                    style={{ height: 50, width: 600, justifyContent: 'center' }}
                    onValueChange={( itemValue, itemIndex) =>  this.setState({assigned: itemValue})}
                >
                    {this.renderTeamPickers()}
                </Picker>
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
    return { project: state.project, team: state.team };
}

export default connect(mapStateToProps, actions)(CreateMember);
