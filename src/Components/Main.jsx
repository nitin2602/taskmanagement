import {
  Box,
  Button,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useDisclosure from "./../Hooks/useDisclosure";
import Createtask from "./Modal/Createtask";
import Cards from "./Cards";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tasks, settasks] = useState([]);

  return (
    <Box p={5} m={7} border="solid" borderRadius={6}>
      <Stack
        gap={{
          base: "20px",
        }}
      >
        <HStack
          gap={{
            base: "20px",
          }}
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          justifyContent="space-between"
        >
          <HStack
            w={{
              base: "100%",
              lg: "60% ",
            }}
            gap={3}
          >
            <Text fontWeight="bold">Filter By: </Text>

            <Input
              bg="#FBF6FD"
              borderRadius={4}
              w="15%"
              size={{
                base: "base",
                lg: "sm",
              }}
              placeholder="Assignee Name"
            />

            <Select
              bg="#FBF6FD"
              textColor="gray"
              borderRadius={4}
              w="20%"
              size="sm"
              placeholder="Priority"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </Select>

            <Input
              bg="#FBF6FD"
              textColor="gray"
              w="20%"
              size={{
                base: "base",
                lg: "sm",
              }}
              placeholder="Select Date and Time"
              type="date"
            />
          </HStack>
          <Button w="fit-content" onClick={onOpen} colorScheme="blue">
            Add New Task
          </Button>
          <Createtask
            tasks={tasks}
            settasks={settasks}
            isOpen={isOpen}
            onClose={onClose}
          />
        </HStack>

        <HStack>
          <Text fontWeight="bold">Sort by:</Text>
          <Select
            mx={3}
            bg="#FBF6FD"
            textColor="gray"
            borderRadius={4}
            w={{
              base:"15%"
            }}
            size={{
              base: "base",
              lg: "sm",
            }}
            placeholder="Priority"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </Select>
        </HStack>
        <Cards tasks={tasks} />
      </Stack>
    </Box>
  );
};

export default Main;
