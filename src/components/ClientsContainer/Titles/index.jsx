import P from 'prop-types';
import * as Styled from './styles';
import arrows from '../../../assets/arrows.svg';

export const ClientTitles = ({ children }) => {
  return (
    <Styled.Container>
      <div>
        <span>
          <img src={arrows} alt="arrows" />
          Cliente
        </span>
        <span>
          CPF
        </span>
        <span>
          E-mail
        </span>
        <span>
          Telefone
        </span>
        <span>
          Status
        </span>
        <span>
          Criar Cobrança
        </span>
      </div>
    </Styled.Container>
  );
};

ClientTitles.propTypes = {
  children: P.node.isRequired,
};
