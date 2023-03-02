export const colorSelector = (type) => {
  if (type === 'Defaulter')
    return {
      backgroundColor: '#f2d6d0',
      color: '#ae1100',
      status: 'Inadimplente'
    }
  if (type === 'Payer')
    return {
      backgroundColor: '#acd9c5',
      color: '#0e8750',
      status: 'Em Dia'
    }
}
