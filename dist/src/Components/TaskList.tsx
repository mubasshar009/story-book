import { TaskBase } from './Task';
import { Task } from './Task';
import { useDispatch,useSelector} from 'react-redux';
import { updateTaskState ,RootState} from '../lib/store';

export type PropsList = {
    loading: boolean;
    tasks: TaskBase[];
    onPinTask: (id: string) => void;
    onArchiveTask: (id: string) => void;
}



export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask }: PropsList) => {

    let events = { onPinTask, onArchiveTask };
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>)
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }
    const taskInOrder = [
        ...tasks.filter(t => t.state === "TASK_PINNED"),
        ...tasks.filter(t => t.state !== "TASK_PINNED"),
    ]
    return (
        <div className="list-items">
            {taskInOrder.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    )
}
export const TaskList = () => {
    //Receiving state;
    const tasks = useSelector((state:RootState) => state.tasks);
    const dispatch = useDispatch();
    const PinTask = (value:string) => {
        dispatch(updateTaskState({id:value,newTaskState:"TASK_PINNED"}))
    }
    const ArchiveTask = (value:string) => {
        dispatch(updateTaskState({id:value,newTaskState:"TASK_ARCHIVED"}))
    }
    const filteredTasks = tasks.filter((t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED")
    return(
        <PureTaskList
            tasks={filteredTasks}
            onPinTask={task => PinTask(task)}
            onArchiveTask = {task => ArchiveTask(task)}
            loading={false}
            />
    )
}