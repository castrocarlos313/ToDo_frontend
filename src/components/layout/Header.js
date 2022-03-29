/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import FolderContext from "../../context/folder/folderContext";
import TaskContext from "../../context/task/TaskContext";
import Boton from "../ui/Boton";

const HeaderStyled = styled.header`
  position: sticky;
  background-color: #000;
  color: white;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Nav = styled.nav`
  width: auto;
  display: flex;
  justify-content: center;
  gap: 10rem;
  @media (max-width: 768) {
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Logo = styled.h1`
  margin: auto 0;
  font-size: 2rem;
`;

const Header = () => {
  const { usuario, logout } = useContext(AuthContext);
  const { resetFolders } = useContext(FolderContext);
  const { resetTasks } = useContext(TaskContext);

  return (
    <HeaderStyled>
      <Logo>ToDo_APP</Logo>
      <Nav>
        <h3
          css={css`
            margin: auto 0;
            min-width: 100px;
            display: none;
            @media (min-width: 768px) {
              display: block;
            }
          `}
        >
          Hola, {usuario && usuario.nombre}
        </h3>
        <div
          css={css`
            margin: auto 0;
          `}
        >
          <Boton
            type="button"
            onClick={() => {
              logout();
              resetFolders();
              resetTasks();
            }}
          >
            Cerrar sesión
          </Boton>
        </div>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
