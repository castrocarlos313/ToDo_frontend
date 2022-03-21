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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FolderForm = () => {
  const {
    folderFormModification,
    changeModalForm,
    createFolder,
    unselectModification,
    saveFolderChanges,
  } = useContext(FolderContext);

  const formik = useFormik({
    initialValues: {
      nombre: "",
    },
    validate: validateFolder,
    onSubmit: (values, { resetForm }) => {
      if (folderFormModification) {
        saveFolderChanges(values);
      } else {
        createFolder(values);
      }
      changeModalForm();
      resetForm();
    },
  });

  useEffect(() => {
    if (folderFormModification) {
      formik.setValues(folderFormModification);
    } else {
      formik.resetForm({
        nombre: "",
      });
    }
  }, [folderFormModification]);

  const closeModal = () => {
    if (folderFormModification) {
      unselectModification();
    }
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
          <h3>
            {folderFormModification ? "Modificar carpeta" : "Crear carpeta"}
          </h3>
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
            {folderFormModification ? "Modificar" : "Crear"}
          </Boton>
        </div>
      </Form>
    </Container>
  );
};

export default FolderForm;
