import classNames from "classnames"
import { useState } from "react"

interface TaskProps {
    title?: string
    status?: "Incomplete" | "Complete"
    showTitleAndStatus?: boolean
    task: string
    taskDescription: string
    isChecked: boolean
    handleCheckBoxChange: () => void
}

const TaskCard = ({ title = "Task",
    status = "Incomplete",
    showTitleAndStatus = true, ...otherProps }: TaskProps) => {
    return (
        <div className="md:container md:mx-auto object-center mt ">
            {showTitleAndStatus && (
                <>
                    <div className="text-6xl">
                        <h1>{title}</h1>
                    </div>
                    <div className="text-base tracking-wide ml-2 py-2">
                        {status}
                    </div>
                </>
            )}
            <Task {...otherProps} />
        </div>

    )
}

export const Task: React.FC<TaskProps> = ({
    task,
    taskDescription,
    isChecked,
    handleCheckBoxChange
}) => {

    const taskStyles = classNames("rounded-lg border mx-w-lg px-5 py-3 flex mb-5", {
        'bg-green-100 border-green-500': isChecked,
        'bg-white border-gray-300': !isChecked,
    })
    const checkStyles = classNames("rounded-lg border min-w-6 min-h-6 my-auto mr-4 cursor-pointer", {
        "bg-green-500 border-green-500": isChecked,
        "bg-white border-gray-300": !isChecked
    })

    return (

        <div className={taskStyles}>
            <div
                className={checkStyles}
                onClick={handleCheckBoxChange}
            />
            <div className="flex flex-col">
                <h3 className="text-2xl font-light py-1">
                    {task}
                </h3>
                <p className="text-base tracking-wide font-light text-gray-500">
                    {taskDescription}
                </p>
            </div>
        </div>
    )
}

const App: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
    }

    const taskData: TaskProps = {
        status: isChecked ? "Complete" : "Incomplete",
        task: 'Sweep the Kitchen',
        taskDescription: 'Get under the cabinets, do a good job',
        isChecked,
        handleCheckBoxChange
    }

    return (
        <div className="md:container md:mx-auto px-5 py-5 m-10">
            <TaskCard {...taskData} />
        </div>
    )

}

export default App