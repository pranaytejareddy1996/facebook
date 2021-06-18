import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'

import { ChatAltIcon , ShareIcon , ThumbUpIcon } from '@heroicons/react/outline'

function Post({src}) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <Image className='rounded-full' 
                    src={'/images/profilepic2.jpg'}
                    width={40} height={40} alt='' />
                
                <div>
                    <p className='font-medium '>Pranay Teja Reddy</p>
                    <p className='text-xs text-gray-400'>12/06/2021,13:13:13</p>
                </div>
                </div>
                
                <p className='pt-4 text-gray-900'>This message is sent from Google Headquaters with a photo attached</p>
            </div>
            
            <div className='relative h-56 md:h-96 bg-white'>
                <Image
                src={src}
                objectFit='cover' layout='fill' />
            </div>
            
            <div className='flex justify-between items-center rounded-b-2xl 
            bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4 ' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div> 
               <div className='inputIcon rounded-none'>
                    <ChatAltIcon className='h-4 ' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div> 
                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4 ' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div> 
                
            </div>
                         
            
            
        </div>
    )
}

export default Post