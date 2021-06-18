import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/client';


function Header() {
const [session] = useSession();

    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            
            {/* left */}
            <div className='flex items-center'>
                <Image 
                src="https://links.papareact.com/5me" 
                width='40'
                height='40'
                layout='fixed'
                />
                <div className='hidden md:inline-flex ml-2 items-center rounded-full bg-gray-200 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input 
                    className = 'hidden lg:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' 
                    type="text" 
                    placeholder="Search Facebook" />
                </div>
            </div>

            {/*center*/}
            <div className='flex justify-center flex-grow ml-10'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/*right */}
            <div className='flex items-center sm:space-x-2 justify-end' >
                <div className='flex items-center hover:bg-gray-200  rounded-full space-x-2 p-1 '>
                    <Image className='rounded-full cursor-pointer ' 
                    src={'/images/profilepic2.jpg'}
                    width={33} height={33} alt='' layout='fixed' />
                    <p className='hidden lg:inline-flex font-medium whitespace-nowrap  pr-3 cursor-pointer'>Pranay</p>
               </div>
               <ViewGridIcon className='icon' />
               <ChatIcon className='icon' />
               <BellIcon className='icon' />
               <ChevronDownIcon className='icon' />
               <div className=' rounded-full p-2
                cursor-pointer hover:bg-red-500 items-center'>
               <button onClick={signOut} ><p className='font-medium'>Log Out</p></button>
               </div>
               
            </div>

        </div>
    )
}

export default Header
