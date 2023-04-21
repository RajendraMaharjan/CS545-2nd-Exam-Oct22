import axios from 'axios';
import React, { useContext, useEffect, useState, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router';
import { SelectedStudents } from "../../ThemeColor";
import Course from "../course/Course"


function StudentDetails() {

    const param = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({});

    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudents);

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;


    // console.log(selectedStudents.include(param.id));

    const getStudentD = async () => {
        console.log("RARARARARAR", param.id)

        if (param.id) {
            axios.get('http://localhost:8080/api/v1/students/' + param.id)
                .then(r => {
                    console.log("DATTAT RARARA ", r.data);
                    setStudent(r.data)
                })
                .catch(e => console.log(e));
        }
    };

    const deleteStudent = async (id) => {
        console.log("RARARARARAR", param.id)

        if (param.id) {
            axios.delete('http://localhost:8080/api/v1/students/' + id)
                .then(r => {
                    console.log("DELETED", r.data);
                    navigate('/students');
                })
                .catch(e => console.log(e));
        }
    };


    useEffect(() => {
        getStudentD();
    }, [param.id]);


    let studentDetailsContent;;

    if (param.id) {

        studentDetailsContent = (
            <div className="StudentDetails">
                <div >
                    <div>
                        <h3> Student Info </h3>
                    </div>
                    Name: {student.name}<br />
                    ID: {student.id}
                    <div >
                        GPA: {student.gpa}
                        <br />

                        <div style={{ textAlign: "left" }}>
                            {space}    {student.courseList == null ? "Term status: inactive" : "Courses"} <br />
                            {student.courseList != null ? student.courseList.map(course => {
                                return <Course cId={course.id} key={course.id} cName={course.name} />
                            }) : null}
                        </div>
                    </div>


                </div>

                <button onClick={() => { deleteStudent(param.id) }}> Delete </button>

                <br />
                <br />
                <div>
                    {
                        selectedStudents.includes(param.id)
                            ?
                            <button onClick={() => {
                                let removedPost = selectedStudents;
                                removedPost.splice(removedPost.indexOf(param.id), 1);
                                setSelectedStudents([...removedPost]);
                            }}>
                                Unselect </button>
                            :
                            <button onClick={() => {
                                setSelectedStudents([...selectedStudents, param.id]);
                            }}>
                                Select </button>
                    }


                </div>
                <div className="Spec" >
                    <button onClick={() => { navigate("/students"); }}> Back</button>
                </div>
            </div>

        );
    }


    return (
        <div> {studentDetailsContent}</div>
    );
}

export default StudentDetails;