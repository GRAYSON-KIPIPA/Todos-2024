import { useState } from 'react';
import { useStudentStore } from '../store/formOneStore';

const RegisterStudent = () => {
    const [firstN, setFirstN] = useState('')
    const [lastN, setLastN] = useState('')

    const {student, updateFirstName} = useStudentStore()

    function updateNames(e){
        e.preventDefault()
        updateFirstName(firstN, lastN)
    console.log(student.firstName + student.lastName)

    }
    return (
        <div>
            {student.firstName} {"  "} 

            <form>
                <label>
                    FirstName: 
                    <input onChange={(e)=>setFirstN(e.target.value)}/>
                </label>
                <br/> <br/>
                <label>
                    Lastname: 
                    <input onChange={(e)=>setLastN(e.target.value)}/>
                </label>
                <button onClick={updateNames}>UPDATES</button>
            </form>
        </div>
    );
}

export default RegisterStudent;
