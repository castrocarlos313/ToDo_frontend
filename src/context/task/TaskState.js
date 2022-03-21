import { useReducer } from "react";
import toast from "react-hot-toast";
import clienteAxios from "../../config/axios";
import {
  CHANGE_MODAL_STATE,
  CLEAR_CONTEXT,
  CREATE_TASK,
  FETCHING_TASKS,
  GET_TASKS,
  SAVE_TASK_CHANGES,
  SELECT_TASK_MODFICATION,
  UNSELECT_TASK_MODFICATION,
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [],
    taskModification: null,
    taskModal: false,
    fetching: false,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const changeModalForm = () => {
    console.log(state.taskModal);
    dispatch({ type: CHANGE_MODAL_STATE });
  };

  const createTask = async (task, folderId) => {
    try {
      const { data } = await clienteAxios.post("/api/task", {
        ...task,
        folderId,
      });

      console.log(data);

      dispatch({
        type: CREATE_TASK,
        payload: data.task,
      });
    } catch ({ respuesta: { data } }) {
      if (data.valido === false) {
        return toast.error("Su sesión a expirado, vuelva a iniciar sesión");
      }

      toast.error(data.msg);
    }
  };

  const getTasks = async (folderId) => {
    dispatch({
      type: FETCHING_TASKS,
    });

    try {
      const { data } = await clienteAxios.get(`/api/task/${folderId}`);

      console.log(data);

      dispatch({
        type: GET_TASKS,
        payload: data.tasks,
      });
    } catch (error) {
      console.log({ ...error });
    }
  };

  const selectModification = (task) => {
    dispatch({
      type: SELECT_TASK_MODFICATION,
      payload: task,
    });
    changeModalForm();
  };

  const unselectModification = () => {
    dispatch({
      type: UNSELECT_TASK_MODFICATION,
    });
  };

  const saveTaskChanges = async (task) => {
    console.log(task);
    try {
      const { data } = await clienteAxios.put(`/api/task/${task._id}`, {
        nombre: task.nombre,
        completo: task.completo,
      });

      console.log(data);

      dispatch({
        type: SAVE_TASK_CHANGES,
        payload: data.task,
      });
    } catch ({ response: { data } }) {
      if (data.valido === false) {
        return toast.error("Su sesion a expirado, vuelva a iniciar sesion");
      }

      toast.error(data.msg);
    }
  };

  const resetTasks = () => {
    dispatch({
      type: CLEAR_CONTEXT,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskModification: state.taskModification,
        taskModal: state.taskModal,
        fetching: state.fetching,
        changeModalForm,
        createTask,
        getTasks,
        selectModification,
        unselectModification,
        saveTaskChanges,
        resetTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
