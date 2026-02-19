import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useTranslation } from 'next-i18next'

const CvButton = () => {
  const { t } = useTranslation('common')

  const handleDownload = () => {
    const isSpanish = navigator.language.toLowerCase().startsWith('es')
    const fileName = isSpanish ? 'FrontEnd_ES.pdf' : 'FrontEnd_EN.pdf'
    const link = document.createElement('a')
    link.href = `/cvDocs/${fileName}`
    link.download = fileName
    link.click()
  }

  return (
    <button
      onClick={handleDownload}
      data-aos='fade-up'
      className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
      <p>{t('cvButton')}</p>
      <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
    </button>
  )
}

export default CvButton