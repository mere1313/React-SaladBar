import { ArrowForward } from '@mui/icons-material';
import React from 'react'
import  './styles/Section.css';

const Section = () => {
  return (
    <section className='section-1'>
      
    <div className="section-container">

    <div className="texts">
        <h1>Day Starts with a <span>Salad</span></h1>
        <h4>And Ends with 2 Salads</h4>
        <button>Discover</button>
        <button>Menu</button>
    </div>

    <div className="black-box">
    <p>A salad bar is a buffet-style table or counter at a restaurant or food market on which salad components are provided for customers to assemble their own salad plates. Most salad bars provide lettuce, chopped tomatoes, assorted raw, sliced vegetables (such as cucumbers, carrots, celery, olives and green or red bell peppers), dried bread croutons, bacon bits, shredded cheese, and various types of salad dressing. </p>
            <button>
            <span>more</span>
            <ArrowForward />
        </button>
    </div>


    </div>
    </section>
  )
}

export default Section
