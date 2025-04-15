import Image from 'next/image'
import React from 'react'

const FontSettings = () => {
    return (
        <div className='bg-[#F7F8FA] p-2 flex rounded-lg items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
                <Image src="/font.png" width={24} height={24} alt='img' />
            </div>
            <h2>Font Settings</h2>
        </div>
    )
}

export default FontSettings
