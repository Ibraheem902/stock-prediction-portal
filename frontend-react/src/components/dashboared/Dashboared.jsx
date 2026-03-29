import axios from 'axios'
import React,{useEffect} from 'react'
import axiosinstance from '../../axiosinstance'

const Dashboared = () => {
    useEffect (() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosinstance.get('/protected-view/');
            }catch(error){
                console.error('Error fetching Data: ',error)
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <div className='text-light container'>Dashboared</div>
  )
}

export default Dashboared