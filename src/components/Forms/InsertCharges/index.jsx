import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';
import charges from '../../../assets/charge.svg';
import close from '../../../assets/x.svg';
import { Input } from '../Input';
import { Button } from '../../Button';

export const InsertCharges = ({ charge }) => {
  return (
    <Styled.Container>
      <div className='form_container'>
        <div className='form_top'>
          <div className='form_title'>
            <img src={charges} alt="Clients" />
            <h1>{charge ? 'Editar' : 'Cadastro de'} Cobrança</h1>
          </div>
          <img src={close} alt="" />
        </div>
        <form>
          <Input
            label='Nome'
            required
            ph='Insira o Nome'
            type='text'
          />
          <Input
            label='Descrição'
            required
            ph='Insira a descrição'
            type='textarea'
          />
          <div className="asides">
            <Input
              label='Vencimento'
              required
              ph='dd/mm/aaaa'
              type='date'
            />
            <Input
              label='Valor'
              required
              ph='Insira o Valor'
              type='number'
            />
          </div>
          <div className='charge_status'>
            <span>Status*</span>
            <div className='status'>
              <div>
                <input type="radio" id='status_paid' name='charge_status' value='paid'/>
                <label htmlFor="status_paid">Cobrança Paga</label>
              </div>
              <div>
                <input type="radio" id='status_pending' name='charge_status' value='pending' />
                <label htmlFor="status_pending">Cobrança Pendente</label>
              </div>
            </div>
          </div>
          <div className='bottom_btn'>
            <span>Cancelar</span>
            <Button type='submit'>
              Aplicar
            </Button>
          </div>
        </form>
      </div>
    </Styled.Container>
  );
};

InsertCharges.propTypes = {
  charge: P.object.isRequired,
};
