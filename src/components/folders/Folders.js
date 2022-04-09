import styled from "@emotion/styled";
import { useContext } from "react";
import FolderContext from "../../context/folder/folderContext";
import TaskContext from "../../context/task/TaskContext";
import Aside from "../layout/Aside";
import Layout from "../layout/Layout";
import TaskForm from "../tasks/TaskForm";
import Tasks from "../tasks/Tasks";
import Modal from "../ui/Modal";
import FolderForm from "./FolderForm";

const Content = styled.div`
  background-color: #f9f9f9;
  width: 90%;
  height: 550px;
  max-width: 1200px;
  margin: 10rem auto;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Folders = () => {
  const { folderModal } = useContext(FolderContext);
  const { taskModal } = useContext(TaskContext);
  return (
    <Layout>
      <Modal open={folderModal}>
        <FolderForm />
      </Modal>
      <Modal open={taskModal}>
        <TaskForm />
      </Modal>
      <Content>
        <Aside />
        <Tasks />
      </Content>
    </Layout>
  );
};

export default Folders;
