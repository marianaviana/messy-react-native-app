import React, { Component } from 'react';
import Moment from 'moment';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-material-design';

class AssessmentShow extends Component {

  render() {
    const { id, name, created_at, client, employee } = this.props.assessment;
    return (
        <ScrollView>
          <Card key={id}>
            <Card.Body>
              <Text>
                {name} - {Moment(created_at).format('DD-MM-YYYY')}
              </Text>
              <Text>Cliente: {client.name}</Text>
              <Text>Profissional: {employee.name}</Text>
            </Card.Body>
          </Card>
        </ScrollView>
    );
  }
}


export default AssessmentShow;
