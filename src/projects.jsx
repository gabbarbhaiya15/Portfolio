import React from 'react'
import Card from './Card';
import restaurant from"./images/Social_Media_Statistics_-_article_image.jpg"
import chess from"./images/Employee-Data-Management.jpg"
import snake from "./images/car_sale.jpg"
import wise_way from"./images/to_do.webp"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: restaurant,
          altText: 'GOfire Social media',
          title: 'GOfire Social media',
          description: 'Developed using Mern with every feature of a social media platform.',
          explore:"https://github.com/gabbarbhaiya15/GOfire.git"
        },
        {
          imageUrl:chess,
          altText: 'Manager App',
          title: 'Employee Managment App',
          description: 'Developed using Mern stack for employee’s record maintenance dashboard',
          explore:"https://github.com/gabbarbhaiya15/Manager_app.git"

        },
        {
          imageUrl: snake,
          altText: 'Car Sale App',
          title: 'Car Sale App',
          description: "an innovative twist on the classic snake game, allowing players to control the snake's movements through hand gestures, providing an engaging and interactive gaming experience.",
          explore:"https://github.com/gabbarbhaiya15/CAR_Sale.git"
        },
        {
            imageUrl: wise_way,
            altText: 'To-Do List',
            title: 'Mern To-Do List',
            description: "This project is created using Mern in which one can perform all CURD operation by creating to-do list",
            explore:"https://github.com/gabbarbhaiya15/TO-DO-list.git"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
