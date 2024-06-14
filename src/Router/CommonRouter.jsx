import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Account/Login'

function CommonRouter() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default CommonRouter