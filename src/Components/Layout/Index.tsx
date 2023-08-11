import React from 'react'
import './Index.css'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export const Index: React.FC = () => {
  return (
    <div className='App'>
      <SideBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />

        <span className="tags bottom-tags">&lt;/body&gt;
          <br />
          <span className="bottom-tags-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
