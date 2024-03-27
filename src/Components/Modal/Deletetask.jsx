import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const Deletetask = ({ title, isdelOpen, ondelClose, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(true);
    ondelClose();
  };
  return (
    <Modal isOpen={isdelOpen} onClose={ondelClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Do you want to delete task ??</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="ghost" onClick={ondelClose}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Deletetask;
