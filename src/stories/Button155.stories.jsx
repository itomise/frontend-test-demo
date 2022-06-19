import React from 'react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { Button } from './Button';

export default { component: Button };

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.click(canvas.getByTestId('button-1'))

  const element1 = await canvas.findByText('array-number-1')
  expect(element1).toBeInTheDocument()

  userEvent.click(canvas.getByTestId('button-1'))

  expect(element1).not.toBeInTheDocument()

  userEvent.click(canvas.getByTestId('button-1'))

  expect(await canvas.findByText('array-number-1')).toBeInTheDocument()

  expect(canvas.getByTestId('button-29')).toBeInTheDocument()
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
