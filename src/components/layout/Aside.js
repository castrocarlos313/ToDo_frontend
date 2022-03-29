/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import FolderContext from "../../context/folder/folderContext";
import FoldersList from "../folders/FoldersList";
import Boton from "../ui/Boton";
import Spinner from "../ui/Spinner";

const AsideBar = styled.aside`
  width: 45%;
  height: 100%;
  box-sizing: border-box;
  background: #000;
  border-radius: 2rem 0 0 2rem;
  color: #fff;
  padding: 2rem;

  @media (max-width: 890px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 550px;
    border-radius: 2rem 2rem 0 0;
  }
`;

const Aside = () => {
  const { folders, fetching, getFolders, changeModalForm } =
    useContext(FolderContext);

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <AsideBar>
      <h3>Carpetas</h3>
      <div
        css={css`
          display: grid;
          grid-template-rows: 75px 60%;
          gap: 5rem;
          height: 100%;
        `}
      >
        <Boton
          type="button"
          bg="#1154AE"
          bgHover="#fff"
          color="#fff"
          colorHover="#000"
          onClick={() => changeModalForm()}
        >
          Crear carpeta
        </Boton>
        {fetching ? <Spinner /> : <FoldersList folders={folders} />}
      </div>
    </AsideBar>
  );
};

export default Aside;
