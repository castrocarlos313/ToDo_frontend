import { useReducer } from "react";
import toast from "react-hot-toast";
import clienteAxios from "../../config/axios";
import {
  CHANGE_MODAL_STATE,
  CREATE_FOLDER,
  DELETE_FOLDER,
  GET_FOLDERS,
  SAVE_FOLDER_CHANGES,
  SELECT_FOLDER_MODFICATION,
  UNSELECT_FOLDER_MODFICATION,
  SELECT_FOLDER,
  CLEAR_CONTEXT,
} from "../../types";
import FolderContext from "./folderContext";
import FolderReducer from "./folderReducer";

const FolderState = (props) => {
  const initialState = {
    folders: [],
    folderSelected: null,
    folderFormModification: null,
    folderModal: false,
    fetching: true,
  };

  const [state, dispatch] = useReducer(FolderReducer, initialState);

  const getFolders = async () => {
    try {
      const { data } = await clienteAxios.get("/api/folder");

      dispatch({
        type: GET_FOLDERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeModalForm = () => dispatch({ type: CHANGE_MODAL_STATE });

  const createFolder = async (folder) => {
    try {
      const { data } = await clienteAxios.post("/api/folder", folder);

      dispatch({
        type: CREATE_FOLDER,
        payload: data,
      });
    } catch ({ respuesta: { data } }) {
      if (data.valido === false) {
        return toast.error("Su sesión a expirado, vuelva a iniciar sesión");
      }

      toast.error(data.msg);
    }
  };

  const selectModification = (folder) => {
    dispatch({
      type: SELECT_FOLDER_MODFICATION,
      payload: folder,
    });
    changeModalForm();
  };

  const unselectModification = () => {
    dispatch({
      type: UNSELECT_FOLDER_MODFICATION,
    });
  };

  const saveFolderChanges = async (folder) => {
    try {
      const { data } = await clienteAxios.put(`/api/folder/${folder._id}`, {
        nombre: folder.nombre,
      });

      dispatch({
        type: SAVE_FOLDER_CHANGES,
        payload: data.folder,
      });
    } catch ({ response: { data } }) {
      if (data.valido === false) {
        return toast.error("Su sesion a expirado, vuelva a iniciar sesion");
      }

      toast.error(data.msg);
    }
  };

  const deleteFolder = async (folder) => {
    try {
      const { data } = await clienteAxios.delete(`/api/folder/${folder._id}`);

      if (data.folder) {
        dispatch({
          type: DELETE_FOLDER,
          payload: data.folder,
        });
      }
    } catch ({ response: { data } }) {
      if (data.valido === false) {
        return toast.error("Su sesion a expirado, vuelva a iniciar sesion");
      }

      toast.error(data.msg);
    }
  };

  const selectFolder = (folder) => {
    if (state.folder !== folder) {
      dispatch({
        type: SELECT_FOLDER,
        payload: folder,
      });
    }
  };

  const resetFolders = () => {
    dispatch({
      type: CLEAR_CONTEXT,
    });
  };

  return (
    <FolderContext.Provider
      value={{
        folders: state.folders,
        folderSelected: state.folderSelected,
        folderFormModification: state.folderFormModification,
        fetching: state.fetching,
        folderModal: state.folderModal,
        getFolders,
        changeModalForm,
        createFolder,
        selectModification,
        unselectModification,
        saveFolderChanges,
        deleteFolder,
        selectFolder,
        resetFolders,
      }}
    >
      {props.children}
    </FolderContext.Provider>
  );
};

export default FolderState;
