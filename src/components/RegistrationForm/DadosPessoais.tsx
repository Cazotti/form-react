import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { useState } from 'react';

function DadosPessoais ({ aoEnviar }:any) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);

  return (
    <form onSubmit={event => {
      event.preventDefault();
      aoEnviar({ cpf, nome, sobrenome, novidades, promocoes });
    }}>
      <TextField
        value={nome}
        onChange={event => { setNome(event.target.value) }}
        id="nome" label="Nome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={event => { setSobrenome(event.target.value) }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={event => { setCpf(event.target.value) }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promoção"
            onChange={event => { setPromocoes(event.target.checked) }}
            color="primary"
            checked={promocoes}
            defaultChecked={promocoes}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            onChange={event => { setNovidades(event.target.checked) }}
            color="primary"
            checked={novidades}
            defaultChecked={novidades}
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosPessoais;
