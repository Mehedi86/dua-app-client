import React from 'react'
import LanguageSettings from './LanguageSettings'
import GeneralSettings from './GeneralSettings'
import FontSettings from './FontSettings'
import AppearanceSettings from './AppearanceSettings'

const SettingsSideBar = () => {
  return (
    <div className='max-w-[330px] px-4 h-[834px] mx-auto bg-white rounded-xl border border-[#E2E2E2]'>
      <h1 className='text-[20px] font-semibold py-6 text-center'>Settings</h1>
      <div className='space-y-4'>
        <LanguageSettings/>
        <GeneralSettings/>
        <FontSettings/>
        <AppearanceSettings/>
      </div>
    </div>
  )
}

export default SettingsSideBar
