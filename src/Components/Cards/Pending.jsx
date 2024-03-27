import { Box, Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tasklayout from "./../Tasklayout";

const Pending = ({ tasks, onUpdateStatus }) => {
  const tasklength = tasks.length;
  console.log(tasks);
  const [Tasks, setTasks] = useState([...tasks]);
  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);
  console.log(Tasks);

  const updateTaskStatus = (taskIndex, newStatus) => {
    onUpdateStatus(taskIndex, newStatus);
  };
  const deleteTask = (taskToDelete) => {
    setTasks(Tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <Box
      bg="white"
      overflow="hidden"
      overflowY="auto"
      scrollBehavior="smooth"
      height="350px"
      w="200px"
      borderRadius={10}
    >
      <Stack>
        <HStack
          bg="#8C8B90"
          h="40px"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" as="h3" size="md">
            Pending
          </Heading>
        </HStack>
        {tasklength === 0 ? (
          "No Pending Tasks"
        ) : (
          <>
            {Tasks.map((task, index) => (
              <Tasklayout
                key={index}
                status={task.status}
                assignee={task.assignee}
                description={task.description}
                priority={task.priority}
                title={task.title}
                onDelete={() => deleteTask(task)}
                onUpdateStatus={(newStatus) =>
                  updateTaskStatus(index, newStatus)
                }
              />
            ))}
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Pending;
