import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";

const Edittask = ({
  title,
  assignee,
  description,
  priority,
  isOpen,
  onClose,
  newpriority,
  setnewpriority,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="bold">Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              title: title,
              description: description,
              team: "",
              assignee: assignee,
              priority: priority,
            }}
            onSubmit={(values) => {
              setnewpriority(values.priority);
              onClose();
            }}
          >
            <Form>
              <Stack gap={10}>
                <HStack>
                  <label htmlFor="title">Title :</label>
                  <Field
                    disabled
                    style={style}
                    name="title"
                    placeholder="Title"
                  />
                </HStack>

                <HStack>
                  <label htmlFor="description">Description :</label>
                  <Field
                    name="description"
                    disabled
                    type="text"
                    style={descstyle}
                    placeholder="Description"
                  />
                </HStack>

                <HStack>
                  <label htmlFor="team">Team :</label>
                  <Field
                    style={style}
                    disabled
                    name="team"
                    placeholder="Team"
                  />
                </HStack>

                <HStack>
                  <label htmlFor="assignee"> Assignee :</label>
                  <Field
                    style={style}
                    disabled
                    name="assignee"
                    placeholder="Assignee"
                  />
                </HStack>

                <HStack>
                  <label htmlFor="priority">Priority</label>
                  <Field style={style} name="priority" as="select">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </Field>
                </HStack>
              </Stack>

              <HStack justifyContent="flex-end" width="100%">
                <Button type="submit" colorScheme="blue">
                  Edit Task
                </Button>
              </HStack>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
const style = {
  padding: "5px",
};
const descstyle = {
  padding: "5px",
  height: "100px",
  width: "100%",
  top: "0px",
};

export default Edittask;
