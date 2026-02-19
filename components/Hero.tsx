import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import CvButton from './CvButton'
import { useTranslation } from 'next-i18next'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <div className='h-[88vh] bg-[url("/images/banner.jpg")] mt-[8vh] bg-cover bg-center'>
      <Particle />
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 data-aos='fade-left' className='text-[35px] md:text-[50px] text-white font-bold'>
            {t('hero.greeting')} <span className='text-yellow-400'>DIDIER!</span>
          </h1>
          <TextEffect />
          <p data-aos='zoom-in' className='mt-[1.5rem] text-[22px] text-[#ffffff92]'>{t('hero.description')}</p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <CvButton />
          </div>
        </div>
        <div
          data-aos='zoom-in'
          className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src='/images/u1.jpg' alt='Didier Pereira Front-End Developer' fill className='object-cover rounded-full' priority />
        </div>
      </div>
    </div>
  )
}

export default Hero