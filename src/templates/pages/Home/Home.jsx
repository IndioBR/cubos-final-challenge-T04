import * as Styled from './styles'
import { Base } from '../../Base';
import { useState, useEffect, useCallback, useContext } from 'react';
import { AmountCard } from '../../../components/Cards/Amount';
import { ChargesCard } from '../../../components/Cards/ChargesCard';
import { ClientsCard } from '../../../components/Cards/ClientsCard';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../../../components/Contexts';
import { Loading } from '../../../components/Loading';

export const Home = () => {
  const { user } = useContext(MyContext);
  const [amounts, setAmounts] = useState([]);
  const [clients, setClients] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      fetch(`http://localhost:8000/api/installments`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }).then(r => r.json())
        .then(r => {
          const obj = filterAmounts(r);
          setAmounts(obj);
        });
    } catch (error) {
      console.error(error.message);
    }
  }, []);


  const filterAmounts = (data) => {
    const loyalClients = data.filter((ins) => {
      return ins.status === 'Paid';
    });

    const overdueClients = data.filter((ins) => {
      return ins.overdue_payment === 1;
    });

    const forseenClients = data.filter((ins) => {
      return ins.overdue_payment === 0 && (ins.status === 'Open' || ins.status === 'Partially paid');
    });

    const paidArr = loyalClients.map((cli) => {
      return cli.amount;
    });

    const pendingArr = forseenClients.map((cli) => {
      return cli.amount;
    });

    const overdueArr = overdueClients.map((cli) => {
      return cli.amount;
    });

    let paidValue = 0;
    let pendingValue = 0;
    let overdueValue = 0;

    for (let i = 0; i < paidArr.length; i++) {
      paidValue += paidArr[i];
    }
    for (let i = 0; i < pendingArr.length; i++) {
      pendingValue += pendingArr[i];
    }
    for (let i = 0; i < overdueArr.length; i++) {
      overdueValue += overdueArr[i];
    }

    return [
      {
        name: 'Cobranças Pagas',
        value: paidValue,
        obj: loyalClients
      },
      {
        name: 'Cobranças Previstas',
        value: pendingValue,
        obj: forseenClients
      },
      {
        name: 'Cobranças Vencidas',
        value: overdueValue,
        obj: overdueClients
      },
    ]
  }

  if (!amounts || !clients) return <Loading />;

  return (
    <Styled.Container>
      <Base page='Início'>
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
          {amounts.map(charge =>
            <ChargesCard
              key={charge.name}
              charges={charge.obj}
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
