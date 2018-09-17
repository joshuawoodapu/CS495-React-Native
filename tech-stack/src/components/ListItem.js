import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true); 

class ListItem extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {item.description}
                    </Text>
                </CardSection>
            );
        } 
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// How we pluck from the state and inject into a component
// Whenever application state changes, the application will rerender because this will run again 
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
