import {
  CHANGE_MODAL_STATE,
  CLEAR_CONTEXT,
  CREATE_FOLDER,
  DELETE_FOLDER,
  GET_FOLDERS,
  SAVE_FOLDER_CHANGES,
  SELECT_FOLDER,
  SELECT_FOLDER_MODFICATION,
  UNSELECT_FOLDER_MODFICATION,
} from "../../types";

/* eslint-disable indent */
const FolderReducer = (state, action) => {
  switch (action.type) {
    case GET_FOLDERS:
      return {
        ...state,
        folders: [...action.payload.folders],
        fetching: false,
      };
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        folderModal: !state.folderModal,
      };
    case CREATE_FOLDER:
      return {
        ...state,
        folders: [...state.folders, action.payload.folder],
      };
    case SELECT_FOLDER_MODFICATION:
      return {
        ...state,
        folderFormModification: action.payload,
      };
    case UNSELECT_FOLDER_MODFICATION:
      return {
        ...state,
        folderFormModification: null,
      };
    case SAVE_FOLDER_CHANGES:
      return {
        ...state,
        folders: state.folders.map((folder) => {
          if (folder._id == action.payload._id) {
            return action.payload;
          }
          return folder;
        }),
      };
    case DELETE_FOLDER:
      return {
        ...state,
        folderSelected:
          state.folderSelected !== null &&
          state.folderSelected._id === action.payload._id
            ? null
            : state.folderSelected,
        folders: state.folders.filter((folder) => {
          if (folder._id !== action.payload._id) {
            return folder;
          }
        }),
      };
    case SELECT_FOLDER:
      return {
        ...state,
        folderSelected: action.payload,
      };
    case CLEAR_CONTEXT:
      return {
        folders: [],
        folderSelected: null,
        folderFormModification: null,
        folderModal: false,
        fetching: true,
      };
    default:
      return state;
  }
};

export default FolderReducer;
