import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PuplicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashboared' />
  )
}

export default PuplicRoute