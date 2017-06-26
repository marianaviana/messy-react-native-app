import React, { Component } from 'react';
import Moment from 'moment';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-material-design';
import PollockThree from './PollockThree';
import PollockSeven from './PollockSeven';
import Icq from './Icq';
import BodyCompositionChart from './BodyCompositionChart';
import Perimeter from './Perimeter';

class AssessmentShow extends Component {

  renderByType() {
    const assessment = this.props.assessment;

    if (assessment.type === 'Pollock3') {
        return (
        <View>
          <PollockThree assessment={assessment} />
          <BodyCompositionChart assessment={assessment} pollock={assessment.pollock3} />
          <Perimeter assessment={assessment} />
        </View>
      );
    } else if (assessment.type === 'Pollock7') {
        return (
        <View>
          <PollockSeven assessment={assessment} />
          <BodyCompositionChart assessment={assessment} pollock={assessment.pollock7} />
          <Perimeter assessment={assessment} />
        </View>
      );
    }
      return (
        <View>
        <Icq assessment={assessment} />
        <Perimeter assessment={assessment} />
        </View>
      );
  }

  renderName() {
    const { type } = this.props.assessment;

    if (type === 'IcqAssessment') {
      return (<Text>ICQ</Text>);
    }

    return (<Text>{type}</Text>);
  }

  render() {
    const { id, name, created_at, client, employee,
            next_assessment_date } = this.props.assessment;
    return (
        <ScrollView key={id}>
          <Card>
            <Text> Avaliado </Text>
            <Card.Body>
              <Text>
                {name}
              </Text>
              <Text>Cliente: {client.name}</Text>
              <Text>Idade: {client.age}</Text>
              <Text>Sexo: {client.gender}</Text>
              <Text>Avaliador: {employee.name}</Text>
            </Card.Body>
          </Card>
          <Card>
            <Text> Avaliação </Text>
            <Card.Body>
              <Text>Data: { Moment(created_at).format('DD-MM-YYYY') }</Text>
              <Text>Hora: { Moment(created_at).format('hh:mm:ss a') }</Text>
              <Text>Protocolo: {this.renderName()}</Text>
              <Text>Proxima Avaliação: {Moment(next_assessment_date).format('DD-MM-YYYY') }</Text>
            </Card.Body>
          </Card>
          { this.renderByType() }
        </ScrollView>
    );
  }
}


export default AssessmentShow;
