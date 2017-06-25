import React, { Component } from 'react';
import Moment from 'moment';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-material-design';

class GymCardShow extends Component {

  renderCycles(cycles) {
    return cycles.map(cycle =>
      <View key={cycle.id}>
        <Card>
          <Card.Body>
            <Text>{cycle.name}</Text>
          </Card.Body>
        </Card>
        {this.renderWorkouts(cycle.workouts)}
      </View>
    );
  }

  renderWorkouts(workouts) {
    return workouts.map(workout =>
        <View key={workout.id}>
          <Card>
            <Card.Body>
              <Text >
                Nome: {workout.name}
              </Text>
              <Text>
                Equipamento: {workout.equipment.name}
              </Text>
              <Text>
                Série: {workout.serie}
              </Text>
              <Text>
                Sequencia: {workout.sequence}
              </Text>
              <Text>
                Peso: {workout.load}
              </Text>
              <Text>
                Observação: {workout.obs}
              </Text>
            </Card.Body>
          </Card>
      </View>
    );
  }

  render() {
    const { id, name, created_at, cycles, client, employee } = this.props.gymcard;
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
          {this.renderCycles(cycles)}
        </ScrollView>
    );
  }
}


export default GymCardShow;
