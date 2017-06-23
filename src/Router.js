import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import GymCard from './components/GymCard';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="GymApp" />
      </Scene>

      <Scene key="main">
        <Scene
          key="GymCard"
          component={GymCard}
          title="Ficha de Treino"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
