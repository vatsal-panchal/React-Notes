import React from "react";
import "../practice-1/Task.css";
import { useState } from "react";
const Task = () => {
  const [task, setTask] = useState(0);
  return (
    <div className="task">
      <h1>{task === 0 ? "no task avialable" : task}</h1>

      <div className="btn">
        <button onClick={() => setTask(task + 1)}>+</button>
        <button onClick={() => setTask(task > 0 ? task - 1 : 0)}>-</button>
      </div>
    </div>
  );
};

export default Task;
