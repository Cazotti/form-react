import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';

function DadosUsuarios ({ aoEnviar }:any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={event => {
      event.preventDefault();
      aoEnviar({ email, senha });
    }}>
      <TextField
        value={email}
        onChange={event => {setEmail(event.target.value)}}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={event => {setSenha(event.target.value)}}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuarios;
