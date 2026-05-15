const TaskCard = ({ task, onDelete, onStatusChange }) => {
  const statusColors = {
    'Pending': '#f59e0b',
    'In Progress': '#3b82f6',
    'Completed': '#10b981',
  }

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <select
        value={task.status}
        onChange={e => onStatusChange(task._id, e.target.value)}
        style={{
          padding: '4px 8px',
          borderRadius: 6,
          border: `1px solid ${statusColors[task.status] || '#ccc'}`,
          color: statusColors[task.status],
          fontWeight: 600,
          marginBottom: 10,
          cursor: 'pointer'
        }}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <br />
      <button
        onClick={() => onDelete(task._id)}
        style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: 6, cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskCard
