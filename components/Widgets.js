import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon , VideoCameraIcon } from "@heroicons/react/solid"
import Contact from "./Contact"


const contacts = [
    {
        name: 'Elon Musk',
        src: 'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk',
    },
    {
        name: 'Jeff Bezoz',
        src: 'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0p',
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf',
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy',
    },

]


function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
            
            <div className='flex items-center space-x-3 mb-2 relative
            hover:bg-gray-200 cursor-pointer'>
            <img 
                className='rounded-full' 
                objectFit='cover'
                src='./images/profilepic2.jpg'
                width={50}
                height={50}
                layout='fixed'
            />
            <p>Pranay Teja Reddy</p>
            <div className='absolute bottom-2 left-7 bg-green-400 
            h-3 w-3 rounded-full animate-pulse' />
            </div>

            {contacts.map(contact => (
                <Contact  key={contact.src} src={contact.src} name={contact.name}/>
            ))}
            
        </div>
    )
}

export default Widgets
