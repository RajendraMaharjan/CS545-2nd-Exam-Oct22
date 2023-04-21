import axios from "axios";
import './AddStudent.css';
import { useRef } from "react";
import { useNavigate } from "react-router";

const AddStudent = (props) => {

    const addStudentRef = useRef();
    const navigate = useNavigate();

    //If using individual ref, place them in individual input
    // const gpaRef = useRef();
    // const nameRef = useRef();


    function addStudent(e) {
        e.preventDefault();
        const newData = {};
        const formData = addStudentRef.current;
        newData.name = formData['name'].value;
        newData.gpa = formData['gpa'].value;

        // console.log(newData);
        addStudentApi(newData);

    }


    const addStudentApi = async (postData) => {
        axios.post('http://localhost:8080/api/v1/students', postData)
            .then(r => {
                console.log("Added data ==> ", r.data);
                navigate('/students');
            })
            .catch(e => { console.log(e); });
    }

    return (
        <div className="NewProduct">

            <form ref={addStudentRef} >
                <h1>Add a Student</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>GPA</label>
                <input type="text"
                    label={'gpa'}
                    name={'gpa'}
                />
                <button onClick={addStudent}>Add Student </button>
            </form>

        </div>
    );

}

export default AddStudent;