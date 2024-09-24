import { useState } from "react";
import Task from "./Task"
import TaskList from "./TaskList"
import MessageThread from "./MessageThread"

const StylingSite: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const showTask = () => setActiveComponent("task");
    const showTaskList = () => setActiveComponent("taskList");
    const showMessageThread = () => setActiveComponent("messageThread");

    return (
        <div className="flex flex-col min-h-screen">
            <header className="text-center my-10">
                <h1 className="text-6xl font-semibold">Check me out 🥵!</h1>
            </header>

            <nav className="flex justify-center  space-x-4">
                <button
                    onClick={showTask}
                    className="bg-slate-500 text-white px-8 py-2 rounded-full hover:bg-slate-700"
                >
                    List
                </button>
                <button
                    onClick={showTaskList}
                    className="bg-slate-500 text-white px-4 py-2 rounded-full hover:bg-slate-700"
                >
                    Task List
                </button>
                <button
                    onClick={showMessageThread}
                    className="bg-slate-500 text-white px-4 py-2 rounded-full hover:bg-slate-700"
                >
                    Message Thread
                </button>
            </nav>

            <main className="flex-grow">
                {activeComponent === "task" && (
                    <section id="task" className="mb-10">
                        <Task />
                    </section>
                )}

                {activeComponent === "taskList" && (
                    <section id="taskList" className="mb-10">
                        <TaskList />
                    </section>
                )}

                {activeComponent === "messageThread" && (
                    <section id="messages" className="mb-10">
                        <MessageThread />
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="text-center py-5 border-t mt-auto">
                <p className="text-gray-600">© 2024 Faisal Owimer</p>
            </footer>
        </div>
    );
};

export default StylingSite;