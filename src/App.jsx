import {useState} from 'react'
import './App.css'
import Header from './Component/Header'
import Sidebar from './Sidebar'
import Home from './Component/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Employee from './Component/Side_Comp/Employee'
import Admin from './Component/Side_Comp/Admin'
import Cdproject from './Component/Side_Comp/Cdproject'
import Ongproject from './Component/Side_Comp/Ongproject'
import Add from './Component/Side_Comp/Add'
import Edit from './Employee/Edit'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
        <Route path='/sidebar' element={<Sidebar/>}>
        <Route path='' element={<Home />}></Route>
        <Route path='/sidebar/employee' element={<Employee></Employee>}></Route>
        <Route path='/sidebar/add' element={<Add></Add>}></Route>
        <Route path='/sidebar/edit' element={<Edit></Edit>}></Route>
        <Route path='/sidebar/admin' element={<Admin></Admin>}></Route>
        <Route path='/sidebar/Cdproject' element={<Cdproject></Cdproject>}></Route>
        <Route path='/sidebar/Ongproject' element={<Ongproject></Ongproject>}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App