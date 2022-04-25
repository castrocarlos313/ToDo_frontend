/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import proptypes from "proptypes";
import { useContext } from "react";
import { IoMdTrash, IoMdCreate } from "react-icons/io";
import FolderContext from "../../context/folder/folderContext";
import IconBoton from "../ui/IconBoton";

const Li = styled.li`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.bg};
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const P = styled.p`
  font-size: 2rem;
`;

const Folder = ({ folder }) => {
  const { folderSelected, selectModification, deleteFolder, selectFolder } =
    useContext(FolderContext);

  const { nombre } = folder;

  return (
    <Li
      onClick={() => selectFolder(folder)}
      bg={folderSelected?._id === folder._id ? "white" : "#e1e1e1"}
    >
      <P>{nombre}</P>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin: auto 0;
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <IconBoton color="#fff" bg="red" onClick={() => deleteFolder(folder)}>
          <IoMdTrash />
        </IconBoton>
        <IconBoton
          color="#fff"
          bg="orange"
          onClick={() => selectModification(folder)}
        >
          <IoMdCreate />
        </IconBoton>
      </div>
    </Li>
  );
};

export default Folder;

Folder.proptypes = {
  folder: proptypes.object,
};
