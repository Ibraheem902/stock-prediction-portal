import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboared from './components/dashboared/Dashboared'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import PrivateRoute from './PrivateRoute'
import PuplicRoute from './PuplicRoute'

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PuplicRoute><Register /></PuplicRoute>} />
          <Route path='/login' element={<PuplicRoute><Login /></PuplicRoute>} />
          <Route path='/dashboared' element={<PrivateRoute><Dashboared /></PrivateRoute>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
