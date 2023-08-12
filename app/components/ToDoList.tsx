import { ITask } from "@/types/tasks";
import Task from "./Task";

interface ToDoListProps {
    tasks : ITask[]
}

const ToDoList: React.FC<ToDoListProps> = ({tasks}) => {
    return (<>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr> 
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => 
                        <Task key={task.id} task={task} />
                       
                    )}
                     
                </tbody>
            </table>
            </div>
    </>);
}

export default ToDoList;