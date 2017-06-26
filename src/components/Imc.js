import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-material-design';

class Imc extends Component {

  render() {
    const { imc, min, max, ideal_min_weight, ideal_max_weight } = this.props.assessment.imc;
    return (
      <Card>
        <Text> Resultados: </Text>
        <Card.Body>
          <Text>Gordura Atual: { imc }</Text>
          <Text>Ideal Minimo: { min }</Text>
            <Text>Ideal Maximo: { max }</Text>
            <Text>Peso Atual: { this.props.assessment.weight }</Text>
            <Text>Ideal Minimo: { ideal_min_weight }</Text>
            <Text>Ideal Maximo: { ideal_max_weight }</Text>
            </Card.Body>
      </Card>
    );
  }
}

export default Imc;
