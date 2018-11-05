import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class TasksScreen extends Component {
    render() {
        return (
            // Going to put a temp button in, so we can move it move it
            <View>
                <Text>TaskScreen</Text>
                <Button
                    title="Task"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('Task')}
                />
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
      backgroundColor: '#0288D1'
    }
};


export default TasksScreen;
