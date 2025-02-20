import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import {app} from '../server/server.js';

function AddStudents() {
    const [rollNo, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const db = getDatabase(app);

        set(ref(db, 'users/' + rollNo), {
            name: name,
            age: age,
            email: email
        })
        .then(() => {
            alert("Student Added Successfully!");
            setRollNo('');
            setName('');
            setAge('');
            setEmail('');
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
                <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="number" id="roll" required />

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

export default AddStudents;
