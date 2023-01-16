import { Links } from '.';
import homeSelected from '../../../../assets/home.svg'

export default {
  title: 'Links',
  component: Links,
  args: {
    src: homeSelected,
    alt: 'home',
    link: '#home'
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <Links {...args} />
  );
};
