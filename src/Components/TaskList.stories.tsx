import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [
        story => <div style={{ padding: '3rem' }}>{story()}</div>
    ]
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = args => <TaskList {...args} />

export const Default = Template.bind({});

Default.args = {
    tasks: [
        { ...TaskStories.defaultArgs, id: '1', title: 'Task 1' },
        { ...TaskStories.defaultArgs, id: '2', title: 'Task 2' },
        { ...TaskStories.defaultArgs, id: '3', title: 'Task 3' },
        { ...TaskStories.defaultArgs, id: '4', title: 'Task 4' },
        { ...TaskStories.defaultArgs, id: '5', title: 'Task 5' },
        { ...TaskStories.defaultArgs, id: '6', title: 'Task 6' },
    ],
}

export const WithPinnedTasks = Template.bind({});

WithPinnedTasks.args = {
    tasks: [
        {
            ...Default.args?.tasks?.slice(0, 5),
            id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'
        },
    ]
}

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false,
}