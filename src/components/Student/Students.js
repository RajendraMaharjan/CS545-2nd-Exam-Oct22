import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Student from './Student';
import { Link } from 'react-router-dom';

function Students() {

    const [students, setStudents] = useState([]);
    const [flag, setFlag] = useState(false);

    const dropdown = useRef();
    const inputParam = useRef();


    const fetchStudents = async () => {
        return axios.get('http://localhost:8080/api/v1/students', {
            params: {
                filter: dropdown.current.value,
                input: inputParam.current.value
            }
        })
            .then(response => {
                console.log(response);
                setStudents(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const studentList = students.map((s) => {
        // console.log("HELO", s.id);
        return (
            <Link to={`${s.id}`}>
                <Student
                    key={s.id}
                    id={s.id}
                    stud={s}
                />
            </Link>);
    });


    const filterHandler = () => {
        setFlag(!flag)
        console.log(dropdown.current.value);
        console.log(inputParam.current.value);

    }

    useEffect(() => {
        fetchStudents();
    }, [flag])

    const defaultTxt = <h2>No results.</h2>;

    return <div className="Product">
        <div className="Product">
            <label>Filter: </label>
            <select ref={dropdown}>
                <option value="0">N/A</option>
                <option value="gpa">&lt; gpa</option>
                <option value="program">program</option>
            </select>

            <label>&nbsp;&nbsp;&nbsp;Input: </label>
            <input ref={inputParam} type="text"
                label={'input'}
                name={'input'}
            />

            <button onClick={filterHandler} > Apply Filter</button>
        </div>

        <br />
        {studentList}
    </div>;
}

export default Students;
