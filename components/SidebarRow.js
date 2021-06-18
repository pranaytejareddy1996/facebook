import React from 'react'

function SidebarRow({Icon,title}) {
    return (
        <div className='flex flex-row items-center space-x-5 p-4 
        hover:bg-gray-200 rounded-xl cursor-pointer'>
            {Icon &&  <Icon className='h-8 w-8 text-blue-500' /> }
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
            
        </div>
    )
}

export default SidebarRow
