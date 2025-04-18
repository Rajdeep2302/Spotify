import React from 'react'
import {Route, Routes } from 'react-router-dom'
import BodyDisplayHome from './BodyDisplayHome'

const BodyDisplay = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BodyDisplayHome/>}/>
      </Routes>
    </div>
  )
}

export default BodyDisplay
