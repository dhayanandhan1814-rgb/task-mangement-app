import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import { useAuth } from './context/Authcontext'

function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/tasks"
        element={user ? <Tasks /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App