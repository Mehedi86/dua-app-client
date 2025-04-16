import Image from 'next/image'
import React from 'react'

const NavigationBar = () => {
    return (
        <div className='max-w-[100px] bg-white min-h-[927px] rounded-[24px] flex flex-col justify-between items-center py-2 border border-[#E2E2E2]'>
            <Image src="/prayer.png" width={73} height={73} alt='prayer' />
            <div className='flex flex-col gap-[27px]'>
                <Image src="/Home.png" width={38} height={38} alt='img' />
                <Image src="/All_Duas.png" width={38} height={38} alt='img' />
                <Image src="/Memorize.png" width={38} height={38} alt='img' />
                <Image src="/Bookmark.png" width={38} height={38} alt='img' />
                <Image src="/Ruqyah.png" width={38} height={38} alt='img' />
                <Image src="/Dua_Q&A.png" width={38} height={38} alt='img' />
                <Image src="/Book.png" width={38} height={38} alt='img' />
            </div>
            <Image src="/I_want_to_support.png" width={73} height={73} alt='img' />
        </div>
    )
}

export default NavigationBar
