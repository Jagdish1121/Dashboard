import React from 'react'
import Home from './Component/Home'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import Header from './Component/Header'
import { Link, Outlet } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <>
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "" }>
        <div className='sidebar-title' style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <div className='sidebar-brand'style={{color:'white',fontSize:'30px'}}>
                                GolokaIT
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list' style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <li className='sidebar-list-item'>
                <Link to="/sidebar">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/sidebar/employee'>
                👨‍💻 Employee
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/sidebar/admin">
                🛠 Admin
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/sidebar/Add">
                ➕  Add Employee
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/sidebar/Cdproject">
                    ✔ Completed Projects
                </Link>
            </li>
            
            <li className='sidebar-list-item'>
                <Link to="/sidebar/Ongproject">
                ⏳ Ongoing Projects
                </Link>
            </li>

        </ul>
    </aside>
    <Header></Header>
    <Outlet></Outlet>
    </>
)
}

export default Sidebar