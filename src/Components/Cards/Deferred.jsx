import React, { useEffect, useState } from "react";
import { Box, Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";

import Tasklayout from "./../Tasklayout";

const Deferred = ({ tasks, onUpdateStatus }) => {
  const tasklength = tasks.length;
  const [DFTasks, setDFTasks] = useState([...tasks]);
  useEffect(() => {
    setDFTasks(tasks);
  }, [tasks]);

  const updateTaskStatus = (taskIndex, newStatus) => {
    onUpdateStatus(taskIndex, newStatus);
  };
  const deleteTask = (taskToDelete) => {
    setDFTasks(tasks.filter((task) => task !== taskToDelete));
  };
  return (
    <Box
      bg="white"
      overflow="hidden"
      height="350px"
      w="200px"
      borderRadius={10}
    >
      <Stack>
        <HStack
          bg="#F68871"
          h="40px"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" as="h3" size="md">
            Deferred
          </Heading>
        </HStack>
        {tasklength === 0 ? (
          ""
        ) : (
          <>
            {DFTasks.map((task, index) => (
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

export default Deferred;
