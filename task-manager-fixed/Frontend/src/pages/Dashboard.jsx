import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <h1>Dashboard</h1>
        <p>Welcome to your task management dashboard.</p>
      </div>
    </div>
  )
}

export default Dashboard