import { useState } from "react"

interface TaskProps {
    title: string
    status: "Incomplete" | "Complete"
    task: string
    taskDescription: string
    isChecked: boolean
    handleCheckBoxChange: () => void
}

const CheckedStyle = (isChecked: boolean) => {
    return {
        taskDivStyle: isChecked
            ? "rounded-lg border bg-green-100 border-green-500 mx-w-lg px-5 py-3 flex"
            : "rounded-lg border bg-white border-gray-300 max-w-lg px-5 py-3 flex",
        checkboxStyle: isChecked
            ? "rounded-lg bg-green-500 border-green-500 min-w-6 min-h-6 my-auto mr-4 cursor-pointer"
            : "rounded-lg bg-white border border-gray-300 min-w-6 min-h-6 my-auto mr-4 cursor-pointer"
    }
}
const renderTask = ({
    title,
    status,
    task,
    taskDescription,
    isChecked,
    handleCheckBoxChange
}: TaskProps) => {

    const { taskDivStyle, checkboxStyle } = CheckedStyle(isChecked)
    return (
        <div className="md:container md:mx-auto object-center px-5 py-5 m-10">
            <div className="text-6xl">
                <h1>{title}</h1>
            </div>
            <div className="text-base tracking-wide ml-2 py-2">
                {status}
            </div>
            <div className={taskDivStyle}>
                <div
                    className={checkboxStyle}
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
        </div>
    )
}

const Task = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
    }

    const taskData: TaskProps = {
        title: "Task",
        status: "Incomplete",
        task: 'Sweep the Kitchen',
        taskDescription: 'Get under the cabinets, do a good job',
        isChecked,
        handleCheckBoxChange
    }

    return renderTask(taskData)
}

export default Task