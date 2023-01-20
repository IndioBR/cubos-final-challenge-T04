import { ClientsCard } from '.';

export default {
  title: 'ClientsCard',
  component: ClientsCard,
  args: {
    children: 'ClientsCard',
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
