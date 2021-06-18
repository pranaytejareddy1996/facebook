import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon , VideoCameraIcon } from "@heroicons/react/solid"
import Contact from "./Contact"
import { useSession } from "next-auth/client"

function Widgets() {
    const [session] = useSession();

    const contacts = [
    {
        name: 'Pranay Teja Reddy',
        src: `${session.user.image}`,
        profile:`${session.user.image}`,
    },
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

    return (
        <div className='hidden lg:flex flex-col w-80 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5 mr-2'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact  key={contact.src} src={contact.src} name={contact.name}/>
            ))}
            
        </div>
    )
}

export default Widgets
