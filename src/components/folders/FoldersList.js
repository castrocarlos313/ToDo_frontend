import styled from "@emotion/styled";
import proptypes from "proptypes";
import Folder from "./Folder";

const FoldersContainer = styled.ul`
  background: #fff;
  height: auto;
  overflow-y: auto;
  color: #000;
`;

const NoFolders = styled.p`
  text-align: center;
  font-size: 3rem;
`;

const FoldersList = ({ folders }) => {
  return (
    <FoldersContainer>
      {folders.length === 0 ? (
        <NoFolders>No hay carpetas</NoFolders>
      ) : (
        folders.map((folder) => <Folder folder={folder} key={folder._id} />)
      )}
    </FoldersContainer>
  );
};

export default FoldersList;

FoldersList.propstypes = {
  folders: proptypes.arrayOf(Object),
};
