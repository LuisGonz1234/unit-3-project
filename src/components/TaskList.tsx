type TaskListProps = {
  tasks: string[];
};

function TaskList({ tasks }: TaskListProps) {
  return (
    <section>
      <h2>My Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;