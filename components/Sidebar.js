import { useSession } from 'next-auth/client'
import Image from 'next/image'
import React from 'react'
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'

import{
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

function Sidebar() {
const [session, loading] = useSession() ;

    return (
        <div className='p-2 mt-5 w-80'>
            <div className='flex flex-row hover:bg-gray-200 rounded-xl items-center p-1 ' >
                <Image className='rounded-full' 
                    src={session.user.image}
                    width={50} height={50} alt='' layout='fixed' />
                <SidebarRow title='Pranay Teja Reddy'/>
            </div>
            
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingCartIcon} title="Marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>  
        </div>
    )
}

export default Sidebar
