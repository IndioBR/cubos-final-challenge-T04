import P from 'prop-types';
import * as Styled from './styles';

import { Button } from '../../../Button';
import { Input } from '../../Input';
import { useState } from 'react';

import hide from '../../../../assets/hide-password.svg'

export const Register2 = ({ children }) => {
  return (
    <Styled.Container>
      <Input label='Senha' ph='Digite sua Senha' required type='password' passwordImg />
      <Input label='Repita a Senha' ph='Digite sua Senha' required type='password' passwordImg />
      <Button type='submit'>Entrar</Button>
      <p>Já possui uma conta? Faça o <a href="">Login</a></p>
    </Styled.Container>
  );
};

Register2.propTypes = {
  children: P.node.isRequired,
};
