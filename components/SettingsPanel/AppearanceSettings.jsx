import Image from 'next/image'
import React from 'react'

const AppearanceSettings = () => {
  return (
    <div className='border-2 border-[#F7F8FA] rounded-lg'>
      <div className='bg-[#F7F8FA] p-2 flex rounded-lg items-center gap-2'>
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
          <Image src="/appearance.png" width={24} height={24} alt='img' />
        </div>
        <h2>Appearance Settings</h2>
      </div>
      <div className='flex justify-between items-center py-6 px-4'>
        <h2>Night Mode</h2>
        <Image src="/toggle.png" width={28} height={28} alt='img' />
      </div>
    </div>
  )
}

export default AppearanceSettings
