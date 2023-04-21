import React, { useContext } from 'react';
import './Course.css'

const Course = (props) => {

    return (
        <div style={{ width: 400 }} className='Review'>
            {props.cId + " - " + props.cName}
        </div>

    );

}

export default Course;