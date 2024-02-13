//Home.jsx
import React from 'react'
import { 
  BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill
}from 'react-icons/bs'
import { 
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import Sidebar from '../Sidebar';

function Home() {

    const data = [
        {
          name: 'A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>DASHBOARD</h2>
        </div>

        <div className='main-cards'>
            <div className='card' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className='card-inner' style={{color:'blue'}}>
                    <h5>Employee</h5>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h4>30</h4>
            </div>
            <div className='card' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className='card-inner' style={{color:'orange'}}>
                    <h5>Admin</h5>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h4>5</h4>
            </div>
            <div className='card' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className='card-inner' style={{color:'green'}}>
                    <h5>Completed Projects</h5>
                    <h1>✓</h1>
                </div>
                <h4>33</h4>
            </div>
            <div className='card' style={{backgroundColor:'white', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className='card-inner' style={{color:'red'}}>
                    <h5>Ongoing Projects</h5>
                    <h1>©</h1>
                </div>
                <h4>42</h4>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home