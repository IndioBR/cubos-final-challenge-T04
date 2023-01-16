import { Component } from '.';

export default {
  title: 'Component',
  component: Component,
  args: {
    children: 'Component',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <Component {...args} />
  );
};
