import Image from 'next/image'
import React from 'react'
import CvButton from './CvButton'
import { useTranslation } from 'next-i18next'

const About = () => {
  const { t } = useTranslation('common')
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
          <h1 data-aos='fade-down' className='text-[20px] font-bold uppercase text-[#55e6a5] md-1rem'>{t('about.sectionLabel')}</h1>
          <h2 data-aos='fade-down' className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white'>
            {t('about.title')} <span data-aos='fade-up' className='text-yellow-400'>{t('about.titleHighlight')}</span>
          </h2>
          <div className='mb-[3rem] flex items-center md:space-x-10'>
            <span data-aos='fade-right' className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
            <p data-aos='fade-left' className='text-[19px] text-slate-300 w-[80%]'>{t('about.bio')}</p>
          </div>
          <CvButton />
        </div>
        <div data-aos='zoom-out' className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
          <Image src='/images/about.jpg' alt='Didier Pereira Front-End Developer' fill className='relative z-[11] w-[100%] h-[100%] object-contain'/>
          <div className='absolute w-[100%] h-[100%] bg-[#55e6a5] z-[10] top-[-2rem] right-[-2rem]'></div>
        </div>
      </div>
    </div>
  )
}

export default About