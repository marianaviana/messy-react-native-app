import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Logout } from '../actions';

class Dashboard extends Component {

  openGymcard() {
    Actions.GymCard();
  }

  openAssessment() {
    Actions.assessment();
  }

  openProfile() {
    Actions.profile();
  }

  logout() {
    this.props.Logout();
  }

  render() {
    return (
      <View>
      <TouchableWithoutFeedback onPress={this.openGymcard.bind(this)}>
        <View>
          <Card>
            <Card.Body>
              <Text>Fichas</Text>
              </Card.Body>
              </Card>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={this.openAssessment.bind(this)}>
        <View>
          <Card>
            <Card.Body>
              <Text>Avaliações</Text>
              </Card.Body>
              </Card>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={this.openProfile.bind(this)}>
        <View>
          <Card>
            <Card.Body>
              <Text>Profile</Text>
              </Card.Body>
              </Card>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={this.logout.bind(this)}>
        <View>
          <Card>
            <Card.Body>
              <Text>Sair</Text>
              </Card.Body>
              </Card>
        </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default connect(null, { Logout })(Dashboard);
