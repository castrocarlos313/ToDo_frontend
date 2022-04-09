/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import validateSignUp from "../../helpers/validateSignUp";
import Boton from "../ui/Boton";
import Form from "../ui/Form";
import InputGroup from "../ui/Input";
import Spinner from "../ui/Spinner";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const { isLog, signUp, loading } = useContext(AuthContext);

  useEffect(() => {
    if (isLog) {
      navigate("/folders");
    }
  }, [isLog]);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      contraseñaValidar: "",
    },
    validate: validateSignUp,
    onSubmit: async (newUser) => {
      const { nombre, email, contraseña } = newUser;
      await signUp({ nombre, email, contraseña });
    },
  });

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <h1
            css={css`
              text-align: center;
            `}
          >
            Registrarse
          </h1>
          <InputGroup
            inputId="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            placeHolder="Ingrese su nombre"
            labelName="Nombre"
            type="text"
            error={formik.errors.nombre}
          />
          <InputGroup
            inputId="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeHolder="Ingrese su email"
            labelName="Email"
            type="email"
            error={formik.errors.email}
          />
          <InputGroup
            inputId="contraseña"
            onChange={formik.handleChange}
            value={formik.values.contraseña}
            placeHolder="Ingrese su contraseña"
            labelName="Contraseña"
            type="password"
            error={formik.errors.contraseña}
          />
          <InputGroup
            inputId="contraseñaValidar"
            onChange={formik.handleChange}
            value={formik.values.contraseñaValidar}
            placeHolder="Ingrese su contraseña"
            labelName="Validar"
            type="password"
            error={formik.errors.contraseñaValidar}
          />
          <div
            css={css`
              display: flex;
              justify-content: space-around;
              margin: 1rem 0px;
            `}
          >
            <Boton type="submit">Crear cuenta</Boton>
            <Boton type="button" onClick={() => navigate("/")}>
              Iniciar sesión
            </Boton>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default SignUp;
