import Image from "next/image"

function Contact({ src, name }) {
    return (
        <div className='flex items-center space-x-3 mb-2 relative rounded-full
        hover:bg-gray-200 cursor-pointer'>
            <Image 
                className='rounded-full' 
                objectFit='cover'
                src={src}
                width={50}
                height={50}
                layout='fixed'
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-blue-500 
            h-3 w-3 rounded-full animate-pulse' />
        </div>
    )
}

export default Contact
