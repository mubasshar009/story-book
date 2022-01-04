import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PureInboxScreen } from './InboxScreen';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import * as TaskListStories from './TaskList.stories';

//Mock Redux Store;
// const Mockstore = configureStore({
//     reducer: {
//         tasks: createSlice({
//             name: 'tasks',
//             initialState: TaskListStories.Default.args?.tasks,
//             reducers: {
//                 updateTaskState: (state, action) => {
//                     const { id, newTaskState } = action.payload;
//                     const task = state && state?.findIndex((task) => task.id === id);
//                     if (state && task && task >= 0) {
//                         state?[task].state = newTaskState
//                     }
//                 },
//             },
//         }).reducer,
//     },
// });

export default {
    component: PureInboxScreen,
    title: 'PureInboxScreen',
    //decorators: [story => <Provider store={Mockstore}>{story()}</Provider>],
} as ComponentMeta<typeof PureInboxScreen>

const Template: ComponentStory<typeof PureInboxScreen> = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    isError: 'Something',
};