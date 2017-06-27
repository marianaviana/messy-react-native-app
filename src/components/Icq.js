import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Text, View } from 'react-native';

class Icq extends Component {

  render() {
    const { icq, message } = this.props.assessment.icq;
    return (
      <View>
        <Card>
          <Card.Body>
            <Text>Icq: { icq }</Text>
            <Text>Mensagem: { message }</Text>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

export default Icq;
