import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./assets/context/authContext"
import { RoutesApp } from "./routes"
function App() {

  return (
    <>
    <AuthProvider>
      <Router>
            <RoutesApp/>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
