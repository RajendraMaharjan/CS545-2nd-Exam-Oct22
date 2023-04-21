import React, { useContext, useEffect, useState } from 'react';
import { SelectedStudents } from '../../ThemeColor';
import { useNavigate } from 'react-router';
import axios from 'axios';

function ChosenStud(props) {

    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudents);
    const navigate = useNavigate();

    const [selected, setSelected] = useState({});

    useEffect(() => {
        axios('http://localhost:8080/api/v1/students/' + props.id)
            .then(response => {
                // console.log(response.data);
                setSelected(response.data);
            })
    }, [props]);


    const unselectHandler = () => {
        let removedPost = selectedStudents;
        removedPost.splice(removedPost.indexOf(props.id), 1);
        setSelectedStudents(removedPost);
        navigate("/hello")

    };

    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Student!</p>;
    if (props.id != null) {
        post = (
            <div className="Followed">
                <h1>{selected.id}</h1>
                <p>{selected.name}</p>
                <div className="Edit">
                    <button onClick={unselectHandler} className="Delete">Unselect</button>
                </div>
            </div>
        );
    }


    return post;
}

export default ChosenStud;