import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./assets/context/authContext"
import { RoutesApp } from "./routes"
import { GlobalStyle } from './assets/global/styles/global';
function App() {
  
  return (
    <>
    <GlobalStyle>
      <AuthProvider>
        <Router>
              <RoutesApp/>
        </Router>
      </AuthProvider>
    </GlobalStyle>
    </>
  )
}

export default App
