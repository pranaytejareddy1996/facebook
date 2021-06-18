import React from 'react'
import StoryCard from './StoryCard'
import {useSession} from 'next-auth/client'

function Stories() {
    const [session] = useSession();

    const stories = [
        {
            name: 'Pranay Teja Reddy',
            src: '/images/profilepic3.jpg',
            profile: `${session.user.image}`,
        },
        {
            name: 'Bill Gates',
            src: 'https://links.papareact.com/4u4',
            profile:'https://links.papareact.com/zvy',
        },
        {
            name: 'Elon Musk',
            src: 'https://links.papareact.com/4zn',
            profile:'https://links.papareact.com/kxk',
        },
        {
            name: 'Mark Zuckerberg',
            src: 'https://links.papareact.com/xql',
            profile:'https://links.papareact.com/snf',
        },
        {
            name: 'Jeff Bezoz',
            src: 'https://links.papareact.com/k2j',
            profile:'https://links.papareact.com/f0p',
        },
        
    ]
    
    return (
        <div className='flex justify-center space-x-3 mx-auto'>

            {stories.map((story) => (
                <StoryCard 
                key={story.key} 
                name={story.name} 
                src={story.src} 
                profile={story.profile} 
                />
            ))}
        </div>
    )
}

export default Stories
