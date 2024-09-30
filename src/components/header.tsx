import React from 'react'
import {  User, Bell, Layout, Settings } from 'lucide-react';

function Header() {
  return (
    <div className='flex justify-between p-4 bg-gradient-to-r from-blue-800 to-blue-500'>
        <div>ZEUS</div>
        <div className='flex gap-2 text-white'>
            <User size ={18}/><Bell size ={18}/><Settings size ={18}/>
        </div>
    </div>
  )
}

export default Header