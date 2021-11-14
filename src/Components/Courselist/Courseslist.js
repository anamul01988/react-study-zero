import React from 'react';
import './Courselist.css';
// import img1 from '../../img/event-img.jpeg';
import { useState } from 'react/cjs/react.development';

const Courseslist = (props) => {
    console.log(props);
    // const {name, img, price, course-name} = props.course;
    const {img,course_name,course_instructor,available,duration} = props.course;
    const [durationTime,setDuration]=useState(" ");
    const showDuration=()=>setDuration(duration);
    return (
        <div className="course">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h2>{ course_name}</h2>
                <br />
                <h5>Course-instructor: {course_instructor}</h5>
                <p>course-rate:  Nagotiable.</p>
                <p><small>Only {available} students are available.</small></p>
                <p>Duration:{"  "+durationTime} </p>
                <button onClick={showDuration} className='main-atag'>Show duration</button>
                <button  className="main-atag">learn more</button>
            </div>

        </div>
    );
};

export default Courseslist;