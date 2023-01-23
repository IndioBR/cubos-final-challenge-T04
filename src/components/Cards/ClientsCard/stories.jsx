import { ClientsCard } from '.';
import { mock } from './mock';

export default {
  title: 'ClientsCard',
  component: ClientsCard,
  args: {
    title: 'Clientes Inadimplentes',
    count: 6,
    charges: mock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ClientsCard {...args} />
    </div>
  );
};
