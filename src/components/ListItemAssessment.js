import React, { Component } from 'react';
import Moment from 'moment';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-material-design';

class ListItemAssessment extends Component {

  onRowPress() {
    Actions.assessmentShow({ assessment: this.props.assessment });
  }

  render() {
    const { id, type, created_at } = this.props.assessment;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card key={id}>
            <Card.Body>
              <Text>
                {type} - {Moment(created_at).format('DD-MM-YYYY')}
              </Text>
            </Card.Body>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItemAssessment;
