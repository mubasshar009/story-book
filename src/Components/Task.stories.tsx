import { ComponentMeta,ComponentStory} from '@storybook/react';
import {Task,Props} from './Task';


export default {
    title:'Task',
    component:Task,
} as ComponentMeta<typeof Task>;

const Template:ComponentStory<typeof Task> = (args:Props) => <Task {...args} />;

export const Default = Template.bind({});
export const defaultArgs = {
    id:'1',
    title: 'Test Task',
    updatedAt: new Date(2022, 0, 1, 9, 0),
}
Default.args = {
    task: {
        ...defaultArgs,
        state: 'TASK_INBOX',
      },
}
export const Pinned = Template.bind({});

Pinned.args= {
  task: {
    ...defaultArgs,
    state: 'TASK_PINNED',
  },
};
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...defaultArgs,
    state: 'TASK_ARCHIVED',
  },
};