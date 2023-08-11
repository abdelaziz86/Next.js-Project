import { ITask } from "@/types/tasks";

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
                    {tasks.map((task) => ( 
                        <tr key={task.id}> 
                            <td>{task.text}</td>
                            <td>Blue</td>
                        </tr>
                    ))}
                     
                </tbody>
            </table>
            </div>
    </>);
}

export default ToDoList;