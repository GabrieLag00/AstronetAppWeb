import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import {AuthProvider} from './context/AuthContext'
import SearchPage from './pages/SearchPage'
import WiewsPage from './pages/WiewsPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/login' element = {<LoginPage/> } /> 
        <Route path='/register' element = {<RegisterPage/> } /> 
        <Route path='/planets' element = {<h1>Planets</h1> } />
        <Route path='/profile' element = {<h1>Profile</h1> } /> 
        <Route path='/ubicacion' element = {<h1>Ubicación</h1> } /> 
        <Route path='/vistas' element = {<WiewsPage/> } />
        <Route path='/search' element = {<SearchPage/> } /> 
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;