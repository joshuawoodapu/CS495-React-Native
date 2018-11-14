import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as actions from '../actions';

class ProjectList extends Component {
    static navigationOptions = {
        title: 'Projects',
    };
    // This handles what happens when a single member is tapped
    onProjectPress(project) {
        // Dispatch an action to change the currently selected member in state
        this.props.projectChanged(project);

        // Navigate to the member page
        this.props.navigation.navigate('Tasks');
    }

    renderProjects() {
        return this.props.projects.map((item) =>         
            <ListItem
                key={item.id}
                title={item.title}
                onPress={() => this.onProjectPress(item)}
            />
        );
    }

    render() {
        return (
            // The members from state are rendered into a scroll view
            <ScrollView>
                {this.renderProjects()}
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
    return { projects: state.projects };
}

export default connect(mapStateToProps, actions)(ProjectList);
