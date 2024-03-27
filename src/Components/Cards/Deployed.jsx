import { Box, Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tasklayout from "./../Tasklayout";

const Deployed = ({ tasks, onUpdateStatus }) => {
  const tasklength = tasks.length;
  const [DTasks, setDTasks] = useState([...tasks]);
  useEffect(() => {
    setDTasks(tasks);
  }, [tasks]);

  const updateTaskStatus = (taskIndex, newStatus) => {
    onUpdateStatus(taskIndex, newStatus);
  };
  const deleteTask = (taskToDelete) => {
    setDTasks(tasks.filter((task) => task !== taskToDelete));
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
          bg="#353976"
          h="40px"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" as="h3" size="md">
            Deployed
          </Heading>
        </HStack>
        {tasklength === 0 ? (
          ""
        ) : (
          <>
            {DTasks.map((task, index) => (
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

export default Deployed;
