import P from 'prop-types';
import * as Styled from './styles';
import arrows from '../../../assets/arrows.svg';

export const ChargesTitles = () => {
  return (
    <Styled.Container>
      <div>
        <span>
          <img src={arrows} alt="arrows" />
          Cliente
        </span>
        <span>
          <img src={arrows} alt="arrows" />
          ID Cob.
        </span>
        <span>
          Valor
        </span>
        <span>
          Data de venc.
        </span>
        <span>
          Status
        </span>
        <span>
          Descrição
        </span>
      </div>
    </Styled.Container>
  );
};
