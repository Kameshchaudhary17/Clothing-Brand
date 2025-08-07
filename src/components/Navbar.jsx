import { Search, Bell, MessageCircleMore } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-around w-full h-30 space-x-50'>
        <div className='w-50 h-50'><img src="src/assets/photo/Logo.jpg" alt="" /></div>
        <div className='relative'>
            <input type="text"
            placeholder='Search...'
            className='pl-10 border-1 w-100 h-8 rounded-2xl p-5 bg-gray-100'/>
            <Search className='absolute top-2 left-3 ' />
        </div>
        
            <div className='flex items-center justify-around space-x-5'>
                <div>
                   <MessageCircleMore className="h-6 w-6 text-gray-700 cursor-pointer" />
                </div>
                <div>
                <Bell className="h-6 w-6 text-gray-700 cursor-pointer" />
                </div>
                <div><img className='h-10 w-10 rounded-full cursor-pointer' src="https://imgs.search.brave.com/wuoeXlQdZnjBYPg8pqxz9Av00u-_bj18KeJkDeC5Gx0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvX25leHQv/aW1hZ2U_dXJsPS9y/ZXZpZXdzL3BmcF8x/LndlYnAmdz0yNTYm/cT03NSZkcGw9ZHBs/X0g2cWRqNmRZR2JB/TnhUWlhZZlZhaXE2/RHM4a1g" alt="" /> </div>
                <div className='text-2xl text-blue-400'>Sunny pazi

                </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
