import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Text, View } from 'react-native';

class Perimeter extends Component {

  pollock7() {
    const { type, peitoral, subescapular, axilar_media, abdominal } = this.props.assessment;
    if (type === 'Pollock7') {
      return (<View>
        <Text>Peitoral: { peitoral } cm</Text>
        <Text>Subescapular: { subescapular } cm</Text>
        <Text>Axilar Média: { axilar_media } cm</Text>
        <Text>Abdominal: { abdominal } cm</Text>
      </View>
    );
    }
  }

  renderNonIcq() {
    const { neck, shoulder, chest, abdomen,
            right_arm, left_arm, right_forearm, left_forearm,
            right_thigh, left_thigh, right_calf, left_calf } = this.props.assessment;

    if (this.props.assessment.type !== 'IcqAssessment') {
      return (<View>
        <Text>Abdomen { abdomen } cm</Text>
        <Text>Pescoço: { neck } cm</Text>
        <Text>Ombro: { shoulder } cm</Text>
        <Text>Tórax: { chest } cm</Text>
        <Text>Braço Direito: { right_arm } cm</Text>
        <Text>Braço Esquerdo: { left_arm } cm</Text>
        <Text>Antebraço Direito: { right_forearm } cm</Text>
        <Text>Antebraço Esquerdo: { left_forearm } cm</Text>
        <Text>Coxa Direita: { right_thigh } cm</Text>
        <Text>Coxa Esquerda: { left_thigh } cm</Text>
        <Text>Panturrilha Direita: { right_calf } cm</Text>
        <Text>Panturrilha Esquerda: { left_calf } cm</Text>
      </View>
    );
    }
  }

  renderNonIcqDobras() {
    const { tricipital, suprailiaca, coxa } = this.props.assessment;

    if (this.props.assessment.type !== 'IcqAssessment') {
      return (<Card>
                <Text> Dobras Cutâneas </Text>
                  <Card.Body>
                    <Text>Tricipital: { tricipital } cm</Text>
                    <Text>Suprailiaca: { suprailiaca } cm</Text>
                    <Text>Coxa: { coxa } cm</Text>
                    {this.pollock7()}
                  </Card.Body>
                  </Card>
              );
    }
  }

  render() {
    const { waist, hip, weight, height } = this.props.assessment;
    return (

    <View>
      <Card>
        <Text> Perimetros: </Text>
          <Card.Body>
            <Text>Cintura: { waist } cm</Text>
            <Text>Quadril: { hip } cm</Text>
            {this.renderNonIcq()}
            </Card.Body>
        </Card>
        <Card>
          <Text> Biometria </Text>
          <Card.Body>
          <Text>Massa Corporal: { weight } cm</Text>
          <Text>Estatura: { height } cm</Text>
          </Card.Body>
        </Card>
        {this.renderNonIcqDobras()}
      </View>
    );
  }
}

export default Perimeter;
