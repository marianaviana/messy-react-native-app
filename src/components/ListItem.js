import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-material-design';

class ListItem extends Component {

  onRowPress() {
    Actions.gymcardShow({ gymcard: this.props.gymcard });
  }

  render() {
    const { id, name } = this.props.gymcard;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card key={id}>
            <Card.Body>
              <Text>
                {name}
              </Text>
            </Card.Body>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
