import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className='flex'>
            {/* sidebar  */}
                <Sidebar />
            {/* main content */}
            <div className='p-2 m-2 w-full h-full '>
                <Outlet />
            </div>
        </div>
    )
}
