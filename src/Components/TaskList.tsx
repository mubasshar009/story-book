import {TaskBase} from './Task';
import {Task} from './Task';
export type PropsList = {
    loading:boolean;
    tasks:TaskBase[];
    onPinTask:(id:string) => void;
    onArchiveTask:(id:string) => void;
}
const TaskList = ({loading,tasks,onPinTask,onArchiveTask}:PropsList) => {

    let events = {onPinTask,onArchiveTask};
    if(loading){
        return <div className="list-items">empty</div>
    }
    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}            
        </div>
    )
}

export default TaskList
