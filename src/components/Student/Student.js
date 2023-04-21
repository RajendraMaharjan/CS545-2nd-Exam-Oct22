
import React, { useContext } from 'react';

const Student = (props) => {

    return (
        <div className="Content" >
            <h2>{props.stud.name}</h2>
            <h2>{props.id}</h2>
        </div>
    );
}

export default Student;




