import * as Styled from './styles'
import { Base } from '../Base';
import { useState, useEffect } from 'react';
import { AmountCard } from '../../components/Cards/Amount';
import { ChargesCard } from '../../components/Cards/ChargesCard';
import { ClientsCard } from '../../components/Cards/ClientsCard';

export const Home = () => {
  const [amounts, setAmounts] = useState([]);
  const [charges, setCharges] = useState([]);
  const [clients, setClients] = useState([]);
  return (
    <Styled.Container>
      <Base>
        <div className='Amount'>
          {amounts.map(amount =>
            <AmountCard
              amount={amount.value}
              name={amount.name}
              key={amount.name}
            />
          )}
        </div>
        <div className='Charges'>
          {charges.map(charge =>
            <ChargesCard
              key={charge.name}
              charges={charge.charges}
              name={charge.name}
            />
          )}
        </div>
        <div className='Clients'>
          {clients.map(client =>
            <ClientsCard
              key={client.name}
              charges={client.charges}
              title={client.title}
            />
          )}
        </div>
      </Base>
    </Styled.Container>
  );
}

export default Home;
