import React, {useState} from 'react'
import EachStudent from './EachStudent'

const Students = ({studentData}) => {

    const [searchName, setSearchName] = useState("");

    return (
        <div className="studentContainer">

            <input className="searchBar" type='text' placeholder="Search by name" onChange={(event) =>{setSearchName(event.target.value);}}/>

            {studentData.filter((val)=>{

                if(searchName === ""){
                    return val;
                }else if(fullName(val.firstName, val.lastName).toLowerCase().includes(searchName.toLowerCase())){
                    return val;
                }else{
                    return false;
                }

            }).map((eachStudent)=>(
                <EachStudent key={eachStudent.id} eachStudent={eachStudent}/>
            ))}
        </div>
    )
}

export default Students

// this function returns the full name of the student
const fullName = (firstName, lastName) =>{
    let fullName = "";
    return fullName + firstName + " " + lastName;
}