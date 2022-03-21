/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import proptypes from "proptypes";
import { useContext } from "react";
import {
  IoMdTrash,
  IoMdCreate,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import TaskContext from "../../context/task/TaskContext";
import IconBoton from "../ui/IconBoton";

const Li = styled.li`
  padding: 0.5rem 1rem;
  background-color: #e1e1e1;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #e4e4e4;
  }
`;

const P = styled.p`
  font-size: 2rem;
`;

const Task = ({ task }) => {
  const { selectModification, saveTaskChanges } = useContext(TaskContext);
  const { nombre, completo, _id } = task;

  const changeTaskState = () => {
    saveTaskChanges({
      nombre,
      completo: !completo,
      _id,
    });
  };

  return (
    <Li>
      <P>{nombre}</P>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin: auto 0;
        `}
      >
        <IconBoton
          color="#fff"
          bg={completo ? "green" : "red"}
          onClick={changeTaskState}
        >
          <IoMdCheckmarkCircleOutline />
        </IconBoton>
        <IconBoton color="#fff" bg="red">
          <IoMdTrash />
        </IconBoton>
        <IconBoton
          color="#fff"
          bg="orange"
          onClick={() => selectModification(task)}
        >
          <IoMdCreate />
        </IconBoton>
      </div>
    </Li>
  );
};

export default Task;

Task.proptypes = {
  task: proptypes.object,
};
