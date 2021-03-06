import { configureStore,createSlice} from '@reduxjs/toolkit';

const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];
const ErrorInitialState = {
    isError:""
}
const AppStateSlice = createSlice({
    name:"appState",
    initialState:ErrorInitialState,
    reducers:{
        updateAppState:(state,action) => {
            return {
                ...state,
                isError:action.payload
            }
        }
    }
})
const TaskSlice = createSlice({
    name:"tasks",
    initialState:defaultTasks,
    reducers:{
        updateTaskState :(state,action) => {
            const { id,newTaskState} = action.payload;
            const task = state.findIndex(task => task.id === id);
            if(task >= 0 ){
                state[task].state = newTaskState;
            }
        }
    }
})
export const {updateTaskState } = TaskSlice.actions;
export const { updateAppState } = AppStateSlice.actions;
const store = configureStore({
    reducer:{
        tasks:TaskSlice.reducer,
        isError:AppStateSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store;