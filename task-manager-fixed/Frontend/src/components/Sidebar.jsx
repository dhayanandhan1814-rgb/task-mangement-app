import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  )
}

export default Sidebar