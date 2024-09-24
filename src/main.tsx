import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import MessageThread from "./components/MessageThread";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/task",
    element: <Task />
  },
  {
    path: "/taskList",
    element: <TaskList />
  },
  {
    path: "/messages",
    element: <MessageThread />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);