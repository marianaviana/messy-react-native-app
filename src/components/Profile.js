import React, { Component } from 'react';
import Moment from 'moment';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-material-design';
import { connect } from 'react-redux';
import { ProfileFetch } from '../actions';

class Profile extends Component {

  componentWillMount() {
    this.props.ProfileFetch();
  }

  render() {
    const { name, gender, birth_date, rg, cpf, address, telephone,
            email, disabilities, blood_type, allergy, obs,
            subscription_date, payment_date } = this.props.profile;
    return (
        <ScrollView>
          <Card>
            <Card.Body>
              <Text>{name}</Text>
              <Text>Gênero: {gender}</Text>
              <Text>Aniversário: {Moment(birth_date).format('DD-MM-YYYY')}</Text>
              <Text>RG: {rg}</Text>
              <Text>CPF: {cpf}</Text>
              <Text>Endereço: {address}</Text>
              <Text>Telefone: {telephone}</Text>
              <Text>Email: {email}</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Text>Necessidades Especiais: {disabilities}</Text>
            <Text>Tipo Sanguínio: {blood_type}</Text>
            <Text>Alergia: {allergy}</Text>
            <Text>Observação: {obs}</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <Text>Data da matrícula: {Moment(subscription_date).format('DD-MM-YYYY')}</Text>
            <Text>Dia de pagamento: {payment_date}</Text>
            </Card.Body>
          </Card>
        </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const profile = state.profile;
  return { profile };
};

export default connect(mapStateToProps, { ProfileFetch })(Profile);
