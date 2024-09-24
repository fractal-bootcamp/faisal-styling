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
import StylingSite from "./components/StylingSite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StylingSite />
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

const container = document.getElementById("root")

if (!container) {
  throw new Error("No root element.")
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);