import { useState } from 'react';
import { getDatabase, ref, update } from 'firebase/database';
import {app} from '../server/server.js';
import { useNavigate, useLocation } from 'react-router-dom';

function UpdateStudents() {
    const navigate = useNavigate();
    const location = useLocation();
    const [rollNo, setRollNo] = useState(location.state[0]);
    const [name, setName] = useState(location.state[1].name);
    const [age, setAge] = useState(location.state[1].age);
    const [email, setEmail] = useState(location.state[1].email);
    

    const submitHandler = (e) => {
        e.preventDefault();
        const db = getDatabase(app);

        const studentRef = ref(db, 'users/' + location.state[0]);
        update(studentRef, {
            name: name,
            age: age,
            email: email
        })
        .then(() => {
            alert("Student updated Successfully!");
            setRollNo('');
            setName('');
            setAge('');
            setEmail('');
            navigate('/listStudent');
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
    };

    return (
        <div className="form-container">
            <h2>Add Student</h2>
            <form id="studentForm" onSubmit={submitHandler}>
                <label htmlFor="roll">Roll Number:</label>
                <input disabled  value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="number" id="roll" required />

                <label htmlFor="name">Student Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" required />

                <label htmlFor="age">Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="age" required />

                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required />

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default UpdateStudents;
