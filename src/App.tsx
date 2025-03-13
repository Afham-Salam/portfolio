
import { Outlet } from 'react-router-dom'

 import Navbar from './components/Navbar'

type Props = {}

export default function App({}: Props) {
  
  return (
    <>
    <Navbar/> 
   
    <Outlet />
    
    
    </>
  )
}