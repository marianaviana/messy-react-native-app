import React, { Component } from 'react';
import Moment from 'moment';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-material-design';

class ListItemAssessment extends Component {

  onRowPress() {
    Actions.assessmentShow({ assessment: this.props.assessment });
  }

  renderName() {
    const { type, created_at } = this.props.assessment;

    if (type === 'IcqAssessment') {
      return (<Text>ICQ - {Moment(created_at).format('DD-MM-YYYY')}</Text>);
    }

    return (<Text>{type} - {Moment(created_at).format('DD-MM-YYYY')}</Text>);
  }

  render() {
    const { id } = this.props.assessment;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card key={id}>
            <Card.Body>
              <Text>
                {this.renderName()}
              </Text>
            </Card.Body>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItemAssessment;
