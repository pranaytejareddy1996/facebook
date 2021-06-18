import Post from "./Post";
import Image from 'next/image'

function Posts() {
    return (
        <div className='flex flex-col'>
            <Post src='/images/Google.png' />
            <Post src='/images/lion.jpg' />
            <Post src='/images/profilepic2.jpg' />
            
        </div>
    )
}

export default Posts
