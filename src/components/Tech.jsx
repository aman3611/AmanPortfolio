import React from 'react'
import { technologies } from '../constants'
import {motion} from 'framer-motion';
import {styles} from '../style';
import {fadeIn, textVariant} from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const SkillCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] ">
       <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-[60px] green-pink-gradient p-[1px]  shadow-card'
       >
        <div options={{
          max:45,
          scale:1,
          speed: 450
        }}
          className='bg-tertiary py-5 px-12 min-h-[60px] flex justify-evenly items-center flex-col'        
        >
          {/* <img src={icon} alt={title} className='w-16 h-16 object-contain'></img> */}
          <h3 className='text-white text-[11px] font-bold text-center'>
             {title}
          </h3>
        </div>
       </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          SKILLS & EXPERTISE I'VE DEVELOPED SO FAR
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          SKILLS.
        </h2>
      </motion.div>
      <div className='mt-20 grid justify-center items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6 p-5' >
        {technologies.map((service, index) => (
          <SkillCard  key={service.name} index={index} icon={service.icon} title={service.name}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");
