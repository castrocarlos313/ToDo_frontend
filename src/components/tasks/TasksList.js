import styled from "@emotion/styled";
import proptypes from "proptypes";
import Task from "./Task";

const TaskContainer = styled.ul`
  background: #fff;
  height: auto;
  overflow-y: auto;
  color: #000;
`;

const NoTasks = styled.p`
  text-align: center;
  font-size: 3rem;
`;

const TasksList = ({ tasks }) => {
  return (
    <TaskContainer>
      {tasks.length === 0 ? (
        <NoTasks>No hay tareas</NoTasks>
      ) : (
        tasks.map((task) => <Task task={task} key={task._id} />)
      )}
    </TaskContainer>
  );
};

export default TasksList;

TasksList.proptypes = {
  tasks: proptypes.arrayOf(Object),
};
