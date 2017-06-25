import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import GymCard from './components/GymCard';
import GymCardShow from './components/GymCardShow';
import Assessment from './components/Assessment';
import AssessmentShow from './components/AssessmentShow';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="GymApp" />
      </Scene>

      <Scene key="main">
        <Scene
          key="Dashboard"
          component={Dashboard}
          title="Dashboard"
          initial
        />
        <Scene
          key="GymCard"
          component={GymCard}
          title="Ficha de Treino"
        />
        <Scene key="gymcardShow" component={GymCardShow} title="Detalhes da Ficha" />

        <Scene
          key="assessment"
          component={Assessment}
          title="Avaliação"
        />
        <Scene key="assessmentShow" component={AssessmentShow} title="Detalhes da Avaliação" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
