/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import FolderContext from "../../context/folder/folderContext";
import TaskContext from "../../context/task/TaskContext";
import Boton from "../ui/Boton";
import Spinner from "../ui/Spinner";
import TasksList from "./TasksList";

const FolderNoSelected = styled.p`
  text-align: center;
  font-size: 3rem;
`;

const Tasks = () => {
  const { folderSelected } = useContext(FolderContext);
  const { tasks, fetching, changeModalForm, getTasks } =
    useContext(TaskContext);

  useEffect(() => {
    if (folderSelected) {
      getTasks(folderSelected._id);
    }
  }, [folderSelected]);

  return (
    <div
      css={css`
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 2rem;
        gap: 2rem;

        @media (max-width: 768px) {
          width: 100%;
          height: 550px;
        }
      `}
    >
      <h3>Tareas</h3>
      <div
        css={css`
          display: grid;
          grid-template-rows: 75px 60%;
          gap: 5rem;
          height: 100%;
        `}
      >
        {fetching && <Spinner />}
        {folderSelected && !fetching && (
          <>
            <Boton
              type="button"
              bg="#0E6655"
              bgHover="#000"
              color="#fff"
              colorHover="#fff"
              onClick={() => changeModalForm()}
            >
              Crear tarea
            </Boton>
            <TasksList tasks={tasks} />
          </>
        )}{" "}
        {!folderSelected && (
          <FolderNoSelected>Seleccione una carpeta </FolderNoSelected>
        )}
      </div>
    </div>
  );
};

export default Tasks;
