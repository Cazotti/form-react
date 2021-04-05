import { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

import './App.css';

class App extends Component {
  render () {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" align="center">Formulário de Cadastro</Typography>
        <RegistrationForm />
      </Container>
    );
  }
}

export default App;
