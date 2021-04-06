import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

import DadosEntregas from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function RegistrationForm ({ aoEnviar }:any) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if(etapa === forms.length-1) { aoEnviar(dados); }
  })

  function coletarDados (novosDados:Array<String>) {
    setDados({...dados, ...novosDados})
    setEtapa(etapa + 1);
  }

  const forms = [
    <DadosUsuarios aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntregas aoEnviar={coletarDados}/>,
    <Typography variant="h5" align="center" >Obrigado pelo Cadastro!</Typography>,
  ]

  return (<>
    <Stepper activeStep={etapa}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {forms[etapa]}
  </>);
}

export default RegistrationForm;
