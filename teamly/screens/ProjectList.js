import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class ProjectList extends Component {
    render() {
        return (
            // Going to put a temp button in, so there can be something to move us between pages
            <View>
                <Text>ProjectList</Text>
                <Button
                    title="Project"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('Tasks')}
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


export default ProjectList;
