import {useState } from 'react';
import React from 'react'
import {
  BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify
}from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Header({OpenSidebar}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
        {/* Apply hover effect inline */}
        <h1 
          className='search-item' 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative' }}
        >
          <BsSearch className='icon' />
          {/* Conditional rendering of tooltip */}
          {isHovered && (
            <span 
              style={{ 
                position: 'absolute', 
                top: '30px', 
                left: '-40px', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                color: 'white', 
                padding: '5px', 
                borderRadius: '5px', 
                fontSize: '14px',
                cursor: 'pointer', 
              }}
            >
              Search
            </span>
          )}
        </h1>
      </div>
        <div className='header-right'>
        <Link to='#'>
            <BsFillBellFill className='icon'/></Link>
            <Link to='#'><BsFillEnvelopeFill className='icon' style={{ marginLeft: '20px' }}/></Link>
            <Link to=''><BsPersonCircle className='icon'style={{ marginLeft: '20px' }}/></Link>
        </div>
    </header>
  )
}

export default Header