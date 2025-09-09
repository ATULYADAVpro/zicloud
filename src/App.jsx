import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import DashboardLayout from './pages/dashboard/dashboardLayout'
import Home from './pages/dashboard/home'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='about' />
          <Route path='task' />
          <Route path='people' />
          <Route path='chart' />
          <Route path='mail' />
        </Route>
      </Routes>
    </div>
  )
}
