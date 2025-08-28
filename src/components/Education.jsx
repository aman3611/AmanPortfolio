import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  
  import "react-vertical-timeline-component/style.min.css";
  
  import { styles } from "../style";
  import { educations } from "../constants";
  import { SectionWrapper } from "../hoc";
  import { textVariant } from "../utils/motion";

  const EducationCard = ({date, iconBg, icon, company_name, points, title}) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={date}
        iconStyle={{ background: iconBg }}
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            MY ACADEMIC JOURNEY SO FAR
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Education.
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {educations.map((experience, index) => (
              <EducationCard key={`experience-${index}`} date={experience.date} iconBg={experience.iconBg} icon={experience.icon} company_name={experience.company_name} points={experience.points} title={experience.title}/>
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Education, "education");


