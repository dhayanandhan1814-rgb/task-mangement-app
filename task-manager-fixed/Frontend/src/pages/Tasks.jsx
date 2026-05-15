import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TaskCard from '../components/TaskCard'
import Loader from '../components/Loader'
import { useAuth } from '../context/Authcontext'
import API from '../services/api'

const Tasks = () => {
  const { user } = useAuth()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [adding, setAdding] = useState(false)

  const fetchTasks = async () => {
    try {
      const { data } = await API.get('/tasks', {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      setTasks(data)
    } catch (err) {
      setError('Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    if (!title || !description) return
    setAdding(true)
    try {
      const { data } = await API.post('/tasks', { title, description }, {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      setTasks([...tasks, data])
      setTitle('')
      setDescription('')
    } catch (err) {
      setError('Failed to add task')
    } finally {
      setAdding(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      setTasks(tasks.filter(t => t._id !== id))
    } catch (err) {
      setError('Failed to delete task')
    }
  }

  const handleStatusChange = async (id, status) => {
    try {
      const { data } = await API.put(`/tasks/${id}`, { status }, {
        headers: { Authorization: `Bearer ${user.token}` }
      })
      setTasks(tasks.map(t => t._id === id ? data : t))
    } catch (err) {
      setError('Failed to update task')
    }
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1>Your Tasks</h1>

        <form onSubmit={handleAdd} style={{ display: 'flex', gap: 10, marginBottom: 20, background: 'white', padding: 15, borderRadius: 10 }}>
          <input
            placeholder="Task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ flex: 1 }}
            required
          />
          <input
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ flex: 2 }}
            required
          />
          <button type="submit" disabled={adding}>
            {adding ? 'Adding...' : '+ Add Task'}
          </button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {loading ? (
          <Loader />
        ) : tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <div className="tasks-grid">
            {tasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks
