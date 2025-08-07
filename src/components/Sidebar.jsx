import React from 'react'
import { LayoutDashboard, ClockArrowUp, MessageSquareMore, Users, ShoppingBasket, ArrowLeftRight, ChartNoAxesCombined, Receipt, Percent, Settings, Lock, HelpCircleIcon } from 'lucide-react'


const Sidebar = () => {
  return (
    <div>
      <div className='relative flex flex-col items-start justify-start w-60 h-full p-5 space-y-9'>
      <div className='flex flex-col items-start justify-start gap-2 w-max'>
        <div className='p-2 text-1.5xl text-black h-10 w-45 cursor-pointer hover:bg-blue-400 rounded-2xl'>
          <LayoutDashboard size={24} className="inline-block mr-2" />
          Dashboard</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <ClockArrowUp size={24} className="inline-block mr-2 " />
          Order</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <Users size={24} className="inline-block mr-2" />
          Customer</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <MessageSquareMore size={24} className="inline-block mr-2" />
          Message</div>
      </div>
      <div className='absolute top-50 left-7'>_______________________</div>
      <div className='flex flex-col items-start justify-start gap-2 w-max'>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <ShoppingBasket size={24} className="inline-block mr-2" />
          Product</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <ArrowLeftRight size={24} className="inline-block mr-2" />
          Integration</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <ChartNoAxesCombined size={24} className="inline-block mr-2" />
          Analytics</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <Receipt size={24} className="inline-block mr-2" />
          Invoice</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <Percent size={24} className="inline-block mr-2" />
          Discount</div>
      </div>
      <div className='absolute top-117 left-7'>_______________________</div>
      <div className='flex flex-col items-start justify-start gap-2 w-max'>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <Settings size={24} className="inline-block mr-2" />
          Setting</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <Lock size={24} className="inline-block mr-2" />
          Security</div>
        <div className='p-2 text-1.5xl text-black h-10 w-45 hover:bg-blue-400 rounded-2xl'>
          <HelpCircleIcon size={24} className="inline-block mr-2" />
          Help</div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
