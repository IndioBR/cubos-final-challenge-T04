import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';
import charges from '../../../assets/charge.svg';
import close from '../../../assets/x.svg';
import { Input } from '../Input';
import { Button } from '../../Button';
import { useContext } from 'react';
import { MyContext } from '../../Contexts';

export const InsertCharges = ({ charge }) => {
  const {insertChargeForm, setInsertChargeForm} = useContext(MyContext);

  return (
    <Styled.Container>
      <div className='form_container'>
        <div className='form_top'>
          <div className='form_title'>
            <img src={charges} alt="Clients" />
            <h1>{charge ? 'Editar' : 'Cadastro de'} Cobrança</h1>
          </div>
          <img src={close} alt="" onClick={() => setInsertChargeForm(false)}/>
        </div>
        <form>
          <Input
            label='Nome'
            required
            autoComplete={charge && charge?.debtor?.name}
            ph='Insira o Nome'
            type='text'
          />
          <Input
            label='Descrição'
            required
            autoComplete={charge && charge?.description}
            ph='Insira a descrição'
            type='text'
          />
          <div className="asides">
            <Input
              label='Vencimento'
              required
              autoComplete={charge && charge?.due_date}
              ph='dd/mm/aaaa'
              type='date'
            />
            <Input
              label='Valor'
              required
              autoComplete={charge && charge?.amount}
              ph='Insira o Valor'
              type='number'
            />
          </div>
          <div className='charge_status'>
            <span>Status*</span>
            <div className='status'>
              <div>
                <input type="radio" id='status_paid' name='charge_status' value='paid' defaultChecked/>
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
  charge: P.object,
  debtor: P.string,
};
