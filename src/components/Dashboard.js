import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from 'react';
import { Card } from 'react-native-material-design';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Logout, Checkin } from '../actions';

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

  checkin() {
    this.props.Checkin();
  }

  checkinMessage() {
    if (this.props.checkin.created) {
      return (
        <TouchableWithoutFeedback onPress={this.openGymcard.bind(this)}>
          <Card>
            <Card.Body>
              <Text>{this.props.checkin.message}</Text>
              </Card.Body>
          </Card>
        </TouchableWithoutFeedback>
      );
    }
  }

  render() {
    return (
      <View>
      {this.checkinMessage()}
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
      <TouchableWithoutFeedback onPress={this.checkin.bind(this)}>
        <View>
          <Card>
            <Card.Body>
              <Text>Checkin</Text>
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

const mapStateToProps = state => {
  const checkin = state.checkin;

  return { checkin };
};

export default connect(mapStateToProps, { Logout, Checkin })(Dashboard);
