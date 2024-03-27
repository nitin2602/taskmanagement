import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Pending from "./Cards/Pending";
import Onprogress from "./Cards/Onprogress";
import Completed from "./Cards/Completed";
import Deployed from "./Cards/Deployed";
import Deferred from "./Cards/Deferred";

const Cards = ({ tasks}) => {
  tasks.forEach((task) => {
    // Example condition: if the task has a deadline, mark it as "Pending"; otherwise, mark it as "Deferred"

    task.status = "Pending";
  });
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deployedTasks, setDeployedTasks] = useState([]);
  const [deferredTasks, setDeferredTasks] = useState([]);

  // Initialize tasks when tasks prop changes
  useEffect(() => {
    const initializeTasks = () => {
      const pending = [];
      const inProgress = [];
      const completed = [];
      const deployed = [];
      const deferred = [];

      tasks.forEach((task) => {
        switch (task.status) {
          case "Pending":
            pending.push(task);
            break;
          case "In Progress":
            inProgress.push(task);
            break;
          case "Completed":
            completed.push(task);
            break;
          case "Deployed":
            deployed.push(task);
            break;
          case "Deferred":
            deferred.push(task);
            break;
          default:
            break;
        }
      });

      setPendingTasks(pending);
      setInProgressTasks(inProgress);
      setCompletedTasks(completed);
      setDeployedTasks(deployed);
      setDeferredTasks(deferred);
    };

    initializeTasks();
  }, [tasks]);

  // Function to update the status of a task
  const updateTaskStatus = (taskId, newStatus) => {
    console.log("Updating task status...");
    console.log(newStatus);
    console.log(taskId);

    // Map through tasks array and update the status of the task with the given taskId
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskId) {
        console.log("worked");
        return { ...task, status: newStatus };
      }
      return task;
    });
    console.log(updatedTasks);

    // Reinitialize tasks based on updated tasks array
    const pending = [];
    const inProgress = [];
    const completed = [];
    const deployed = [];
    const deferred = [];

    updatedTasks.forEach((task) => {
      switch (task.status) {
        case "Pending":
          pending.push(task);
          break;
        case "In Progress":
          inProgress.push(task);
          break;
        case "Completed":
          completed.push(task);
          break;
        case "Deployed":
          deployed.push(task);
          break;
        case "Deferred":
          deferred.push(task);
          break;
        default:
          break;
      }
    });

    // Update the state with the new arrays
    setPendingTasks(pending);
    setInProgressTasks(inProgress);
    setCompletedTasks(completed);
    setDeployedTasks(deployed);
    setDeferredTasks(deferred);
  };

  return (
    <HStack flexDirection={{
      base:"column",
      lg:"row"
    }} justifyContent="space-between" mt={5} mx={10} spacing={10}>
      <Pending tasks={pendingTasks} onUpdateStatus={updateTaskStatus} />
      <Onprogress tasks={inProgressTasks} onUpdateStatus={updateTaskStatus} />
      <Completed tasks={completedTasks} onUpdateStatus={updateTaskStatus} />
      <Deployed tasks={deployedTasks} onUpdateStatus={updateTaskStatus} />
      <Deferred tasks={deferredTasks} onUpdateStatus={updateTaskStatus} />
    </HStack>
  );
};

export default Cards;
