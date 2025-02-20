import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {app} from '../server/server.js';
import { useNavigate } from 'react-router-dom';

function ListStudents() {
    const [studentData, setStudentData] = useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'users');

        const unsubscribe = onValue(studentRef, (snapshot) => {
            const data = snapshot.val();
            setStudentData(data);
        });

        return () => unsubscribe(); // Cleanup function to prevent memory leaks
    }, []); // Runs only once when the component mounts

    const deleteData = (key) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            const db = getDatabase(app);
            const studentRef = ref(db, `users/${key}`);
            remove(studentRef)
                .then(() => {
                    alert("Student Removed Successfully!");
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                });
        }
    };

    return (
        <div className="list-container">
            <h1>Student List</h1>
            {studentData ? (
                <ul>
                    {Object.entries(studentData).map(([key, value]) => (
                        <li key={key} className="student-card">
                            <p><strong>Roll No:</strong> {key}</p>
                            <p><strong>Name:</strong> {value.name}</p>
                            <p><strong>Email:</strong> {value.email}</p>
                            <p><strong>Age:</strong> {value.age}</p>
                            <button className="delete-btn" onClick={() => deleteData(key)}>Delete</button>
                            <button className="update-btn" onClick={()=> {navigate(`/updateStudent`,{state:[key,value]})}}>Update</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-data">No students found.</p>
            )}
        </div>
    );
}

export default ListStudents;

