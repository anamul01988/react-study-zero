import React, { useState } from 'react';
import './Courses.css';
import fakeData from './../../fakeData/index';
import Courseslist from '../Courselist/Courseslist';
import Cart from '../Cart/Cart';

const Courses = ()=>{
    const first4 = fakeData.slice(0,4);
    const [courses,setCourses]= useState(first4);
    const[cart,setCart]=useState([]);
    const handleAddCourse = (course) =>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return(
         // <div className="container">
        //     <div className="row">
        //         <div className="col-md-9 col-sm-12">
        //         <div className="Course-container">
        //     <div className="course-list-container">
        //         {
        //             courses.map(pd=> <Courseslist
        //                 handleAddCourse={handleAddCourse}
        //                 course = {pd}> </Courseslist>)
        //         }

        //     </div>
        //     <div className="course-cart-container">
        //         <Cart cart={cart}></Cart>

        //     </div>
        // </div>

        //         </div>
        //         <div className="col-md-3"></div>
        //     </div>
        // </div>
        <div className="Course-container">
            <div className="course-list-container">
                {
                    courses.map(pd=> <Courseslist
                        handleAddCourse={handleAddCourse}
                        course = {pd}> </Courseslist>)
                }

            </div>
            <div className="course-cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>

    );
};


export default Courses;