import { useAuth } from '../context/Authcontext'

const Navbar = () => {
  const { logout } = useAuth()

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default Navbar