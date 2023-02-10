import defaulter from '../../../assets/main/defaulter-client.svg';
import loyal from '../../../assets/main/loyal-client.svg';

export const colorSelector = (type) => {
  switch (type) {
    case 'Cobranças Vencidas':
      return {
        backgroundColor: '#f2d6d0',
        color: '#ae1100',
      }
    case 'Cobranças Pagas':
      return {
        backgroundColor: '#acd9c5',
        color: '#0e8750',
      }
    case 'Cobranças Previstas':
      return {
          backgroundColor: '#f5d9b0',
          color: '#ef8f00',
      }
    case 'Clientes Inadimplentes':
      return {
        backgroundColor: '#f2d6d0',
        color: '#ae1100',
        src: defaulter,
      }
    case 'Clientes Em Dia':
      return {
        backgroundColor: '#acd9c5',
        color: '#0e8750',
        src: loyal
      }
  }
}
