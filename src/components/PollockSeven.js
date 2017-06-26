import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Text, View } from 'react-native';
import Imc from './Imc';

class PollockSeven extends Component {

  render() {
    const { fat_weight, lean_body_mass } = this.props.assessment.pollock7;
    const { imc, message } = this.props.assessment.imc;
    return (
      <View>
        <Imc assessment={this.props.assessment} />
        <Card>
          <Card.Body>
            <Text>Peso Gordo: { fat_weight }</Text>
            <Text>Peso Magro: { lean_body_mass }</Text>
            <Text>Resultado: O imc é { imc } e o resultado foi { message }</Text>
          </Card.Body>
        </Card>
        </View>
    );
  }
}

export default PollockSeven;
