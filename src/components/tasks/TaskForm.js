/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import validateFolder from "../../helpers/validateFolder";
import Boton from "../ui/Boton";
import Form from "../ui/Form";
import IconBoton from "../ui/IconBoton";
import InputGroup from "../ui/Input";
import { IoIosClose } from "react-icons/io";
import { useContext, useEffect } from "react";
import FolderContext from "../../context/folder/folderContext";
import TaskContext from "../../context/task/TaskContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskForm = () => {
  const {
    taskModification,
    changeModalForm,
    createTask,
    unselectModification,
    saveTaskChanges,
  } = useContext(TaskContext);

  const { folderSelected } = useContext(FolderContext);

  const formik = useFormik({
    initialValues: {
      nombre: "",
    },
    validate: validateFolder,
    onSubmit: (values, { resetForm }) => {
      if (taskModification) {
        saveTaskChanges(values);
      } else {
        createTask(values, folderSelected._id);
      }
      changeModalForm();
      resetForm({
        nombre: "",
      });
    },
  });

  useEffect(() => {
    if (taskModification) {
      formik.setValues(taskModification);
    }
  }, [taskModification]);

  const closeModal = () => {
    if (taskModification) {
      unselectModification();
    }

    formik.resetForm({
      nombre: "",
    });

    changeModalForm();
  };

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h3>{taskModification ? "Modificar tarea" : "Crear tarea"}</h3>
          <IconBoton onClick={() => closeModal()}>
            <IoIosClose />
          </IconBoton>
        </div>
        <InputGroup
          inputId="nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
          placeHolder="Ingrese su nombre"
          labelName="Nombre"
          type="text"
          error={formik.errors.nombre}
        />
        <div
          css={css`
            display: flex;
            justify-content: space-around;
          `}
        >
          <Boton type="submit">
            {taskModification ? "Modificar" : "Crear"}
          </Boton>
        </div>
      </Form>
    </Container>
  );
};

export default TaskForm;
