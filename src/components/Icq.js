import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Text, View } from 'react-native';
import Imc from './Imc';

class Icq extends Component {

  render() {
    const { icq, icqMessage } = this.props.assessment.icq;
    const { imc, message } = this.props.assessment.imc;
    return (
      <View>
        <Imc assessment={this.props.assessment} />
        <Card>
          <Card.Body>
            <Text>Icq: { icq }</Text>
            <Text>Mensagem: { icqMessage }</Text>
            <Text>Resultado: O imc é { imc } e o resultado foi { message }</Text>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

export default Icq;
