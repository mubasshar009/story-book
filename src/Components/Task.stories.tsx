import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Task, Props } from './Task';
export const defaultArgs = {
  id: '1',
  title: 'Test Task',
  updatedAt: new Date(2022, 0, 1, 9, 0),
}

export default {
  title: 'Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    updatedAt: new Date(2022, 0, 1, 9, 0),
    state: 'TASK_INBOX',
  },
}
export const Pinned = Template.bind({});

Pinned.args = {
  task: {
    id: '1',
    title: 'Test Task',
    updatedAt: new Date(2022, 0, 1, 9, 0),
    state: 'TASK_PINNED',
  },
};
export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '1',
    title: 'Test Task',
    updatedAt: new Date(2022, 0, 1, 9, 0),
    state: "TASK_ARCHIVED"
  }


};