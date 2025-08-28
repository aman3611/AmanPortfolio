import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import {fadeIn, textVariant, slideIn} from '../utils/motion';
import { animated } from '../assets'; 
import { useState, useEffect, useCallback } from 'react';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
       <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
       >
        <div options={{
          max:45,
          scale:1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'        
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>
             {title}
          </h3>
        </div>
       </motion.div>
    </Tilt>
  )
}

const About = () => {


  const [y, setY] = useState(window.scrollY);
  const [height, setHeight] = useState(384)


const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
      if(height < 384){
        
        setHeight(height+5)
        
      }
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      if(height>0){
        setHeight(height-5)
      }
    }
    setY(window.scrollY);
  }, [y, height]
);

useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <div className='flex flex-col md:flex-row'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}  
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm Aman Gupta, an MCA student and aspiring software developer passionate about building scalable applications with JavaScript (React.js, Node.js) and Python, backed by databases such as MySQL, PostgreSQL, and MongoDB. A full-stack explorer and problem-solver, I love turning ideas into impactful digital experiences - code, create, and innovate ✨.
      {height}
      </motion.p>
      <div className='w-96 h-96 z-0'>
          <motion.div className='inset-0  relative flex justify-center items-center z-10'>
            <img src={animated} alt="animated"/>
            <div  id="thisDiv" className='absolute bg-[#050816] flex flex-col-reverse justify-center items-center z-11 w-96 h-96 bottom-0' style={{
          height: `${height}px`
        }}>
          </div>
          
          </motion.div>
        </div>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} icon={service.icon} title={service.title}/>
        ))} */}
        {/* services ka usage hata diya */}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")