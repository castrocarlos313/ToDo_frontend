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

/* eslint-disable indent */
const TaskReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        taskModal: !state.taskModal,
      };
    case FETCHING_TASKS:
      return {
        ...state,
        fetching: true,
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        fetching: false,
      };
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case SELECT_TASK_MODFICATION:
      return {
        ...state,
        taskModification: action.payload,
      };
    case UNSELECT_TASK_MODFICATION:
      return {
        ...state,
        taskModification: null,
      };
    case SAVE_TASK_CHANGES:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id == action.payload._id) {
            return action.payload;
          }
          return task;
        }),
      };
    case CLEAR_CONTEXT:
      return {
        tasks: [],
        taskModification: null,
        taskModal: false,
        fetching: false,
      };
    default:
      return state;
  }
};

export default TaskReducer;
