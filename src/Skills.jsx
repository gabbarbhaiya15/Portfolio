import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Tech Skills</h2>
      <h3 className='heading2'>Languages & Frameworks</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML-CSS"/>
          <SemiDonutChart percentage={55} fill="#03B0FD" txt="JavaScript"/>
          <SemiDonutChart percentage={90} fill="#03B0FD" txt="React js"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Node js"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="React Native"/>
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Hygraph"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="Python"/>
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="c++"/>
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="MongoDB"/>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Tools & Others</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Socket.io"/>
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="AWS"/>
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Bootstrap"/>
          </div>
          <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Figma"/>
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Git\Github"/>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;

