import { useState } from "react"
import { Task } from "./Task"

interface Task {
    task: string
    taskDescription: string
    isChecked: boolean
}
interface TaskListProps {
    tasks: Task[]
    handleCheckBoxChange: (index: number) => void
}

const dummyTaskList: Task[] = [
    {
        task: "Dishwashing",
        taskDescription: "Wash, and dry dishes, pots, pans, and utensils",
        isChecked: false,
    },
    {
        task: "Laundry",
        taskDescription: "Wash, and dry dishes, pots, pans, and utensils",
        isChecked: false,
    },
    {
        task: "Vacuuming",
        taskDescription: "Vaccum carpets, rugs, and floors throughtput the house",
        isChecked: false,
    },
    {
        task: "Dusting",
        taskDescription: "Dust furniture,shelves, and other surfaces",
        isChecked: false,
    }
]

const TaskList: React.FC<TaskListProps> = ({ tasks, handleCheckBoxChange }) => {

    return (
        <div className="md:container md:mx-auto object-center px-5 py-5 m-10">
            <div className="text-6xl">
                <h1>Task List</h1>
            </div>
            <div className="text-base tracking-wide ml-2 py-2 mb-5">
                <p>Sorted by completion</p>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <Task
                        key={JSON.stringify(task.task)}
                        showTitleAndStatus={false}
                        task={task.task}
                        taskDescription={task.taskDescription}
                        isChecked={task.isChecked}
                        handleCheckBoxChange={() => handleCheckBoxChange(index)}
                    />
                ))}
            </div>
        </div>
    )
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(dummyTaskList)


    const handleCheckBoxChange = (index: number) => {
        const newTasks = [...tasks]
        newTasks[index].isChecked = !newTasks[index].isChecked
        const sortedTasks = [...newTasks].sort((a, b) => Number(b.isChecked) - Number(a.isChecked))
        setTasks(sortedTasks)
    }

    return (
        <div className="md:container md:mx-auto px-5 py-5">
            <TaskList
                tasks={tasks}
                handleCheckBoxChange={handleCheckBoxChange}
            />
        </div>
    )
}

export default App