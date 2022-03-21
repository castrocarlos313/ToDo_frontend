/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import validateLogin from "../../helpers/validateLogin";
import Boton from "../ui/Boton";
import Form from "../ui/Form";
import InputGroup from "../ui/Input";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();
  const { isLog, login } = useContext(AuthContext);

  useEffect(() => {
    if (isLog) {
      navigate("/folders");
    }
  }, [isLog]);

  const formik = useFormik({
    initialValues: {
      email: "",
      contraseña: "",
    },
    validate: validateLogin,
    onSubmit: (values) => login(values),
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h1>Iniciar sesión</h1>
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
          labelName="Contreseña"
          type="password"
          error={formik.errors.contraseña}
        />
        <div
          css={css`
            display: flex;
            justify-content: space-around;
          `}
        >
          <Boton type="submit">Ingresar</Boton>
          <Boton type="button" onClick={() => navigate("/sign-up")}>
            Registrarse
          </Boton>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
