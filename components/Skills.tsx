import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] mb:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h2 className='heading'>
        Education &  <span className='text-yellow-400'>Skills</span>
        </h2>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
          <div>
            <SkillsItem
              title='Jobchain® — Front-End Developer'
              year='2024 - Presente'
           />
            <SkillsItem
              title='Tucán Marketing Digital — Full Stack Dev'
              year='Ene 2024 - Abr 2024'
            />
            <SkillsLanguage
              skill1='HTML / CSS'
              skill2='JavaScript'
              skill3='TypeScript'
              level1='w-[95%]'
              level2='w-[90%]'
              level3='w-[85%]'
            />
          </div>
          <div>
            <SkillsItem
              title='React / Next.js Developer'
              year='2023 - Presente'
           />
            <SkillsItem
              title='React Native / Expo'
              year='2023 - Presente'
            />
            <SkillsLanguage
              skill1='React / Next.js'
              skill2='React Native'
              skill3='Redux / Express'
              level1='w-[95%]'
              level2='w-[80%]'
              level3='w-[75%]'
            />
          </div>
        </div>
    </div>
  )
}

export default Skills