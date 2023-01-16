import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Teste',
    as: 'h1',
    weight: '300',
    color: 'red'
  },
  argTypes: {
    children: { type: 'string' },
    as: { type: 'string' },
    weight: { type: 'string' },
    color: { type: 'string' }
  },
};

export const Template = (args) => {
  return <Title {...args} />;
};
