import Image from 'next/image'
import React from 'react'

const DuaCard = ({ dua, index }) => {
    const { dua_name_en } = dua;
    return (
        <div className='bg-white p-4 rounded-lg h-[400px] mt-4'>
            <div className='flex items-center gap-3'>
                <Image src="/arabic.png" width={35} height={35} alt='arabic' />
                <h1 className='text-[#1FA45B] font-bold'>{index+1}. {dua_name_en}</h1>
            </div>
        </div>
    )
}

export default DuaCard
