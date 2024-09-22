---
to: stories/<%= f %>/<%= h.changeCase.pascal(name) %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/react';
import <%= h.changeCase.pascal(name) %> from '../../<%= f %>/<%= h.changeCase.pascal(name) %>';


const meta = {
  title: '<%= f %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '<%= h.changeCase.pascal(name) %>',
      },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {  },}
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %> >;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
}
