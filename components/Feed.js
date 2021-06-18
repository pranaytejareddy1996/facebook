import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'


function Feed() {
    return (
        <div className='flex flex-col flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-10 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto'>
                <Stories />
                <InputBox />
                <Posts />
            </div>
            <div className=' h-20 md:h-20 p-5 mt-4 bg-white rounded-2xl shadow-sm border-t-2 border-b-2 border-green-500'>
               <h1 className='flex flex-col items-center font-medium text-blue-600'> Thank You for visting my page </h1>
               <h1 className='flex flex-col items-center text-xs'> End of the Homepage </h1>
            </div>
            
        </div>
    )
}

export default Feed

// max-w-md md:max-w-lg lg:max-w-2xl
