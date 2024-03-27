import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Edittask from "./Modal/Edittask";
import useDisclosure from "../Hooks/useDisclosure";
import { useState } from "react";
import Deletetask from "./Modal/Deletetask";

const Tasklayout = ({
  onUpdateStatus,
  title,
  assignee,
  description,
  priority,
  onDelete,
  key,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newpriority, setnewpriority] = useState(priority);
  const [isdelOpen, setdelOpen] = useState(false);

  const ondelOpen = () => {
    setdelOpen(true);
    console.log(isdelOpen);
  };
  const ondelClose = () => {
    setdelOpen(false);
    console.log("close clicked");
  };
  const handleDeleteTask = () => {
    // Logic to delete the task
    console.log("Task deleted");
    onDelete();
  };
  return (
    <Box m={3} bg="#F3F1F2" p={5}>
      <Stack>
        <HStack justifyContent="space-between">
          <Heading as="h6" size="base">
            {title}
          </Heading>
          <Box bg="#23689F" boxSize={5}>
            <Text
              color="white"
              fontSize={10}
              fontWeight="medium"
              textAlign="center"
              p={1}
            >
              P{newpriority}
            </Text>
          </Box>
        </HStack>
        <Text fontSize="10px">{description}</Text>
        <HStack justifyContent="space-between">
          <Text fontWeight="medium">@{assignee}</Text>
          <Menu>
            <Box bg="#23689F" boxSize={5}>
              <MenuButton>
                <Icon
                  color="white"
                  ml="2px"
                  as={PiDotsThreeOutlineVerticalFill}
                />
              </MenuButton>
            </Box>

            <MenuList>
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <Edittask
                setnewpriority={setnewpriority}
                newpriority={newpriority}
                title={title}
                assignee={assignee}
                description={description}
                priority={priority}
                isOpen={isOpen}
                onClose={onClose}
              />
              <MenuItem onClick={ondelOpen}>Delete</MenuItem>
              <Deletetask
                onDeleteTask={handleDeleteTask}
                title={title}
                isdelOpen={isdelOpen}
                ondelClose={ondelClose}
              />
            </MenuList>
          </Menu>
        </HStack>

        <Menu isLazy>
          <MenuButton
            bg="#23689F"
            textColor="white"
            fontWeight="normal"
            py={1}
            px={1}
            size="xl"
            boxSize="fit-content"
          >
            Assign
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => onUpdateStatus("In Progress")}>
              In Progress
            </MenuItem>
            <MenuItem onClick={() => onUpdateStatus("Completed")}>
              Completed
            </MenuItem>
            <MenuItem onClick={() => onUpdateStatus("Deployed")}>
              Deployed
            </MenuItem>
            <MenuItem onClick={() => onUpdateStatus("Deferred")}>
              Deferred
            </MenuItem>
            <MenuItem onClick={() => onUpdateStatus("Pending")}>
              Pending
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Box>
  );
};

export default Tasklayout;
