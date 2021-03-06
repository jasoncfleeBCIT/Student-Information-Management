import React, {useState} from 'react'
import EachStudent from '../studentContainer/EachStudent'

const Students = ({studentData}) => {

    const [searchName, setSearchName] = useState("");
    const [searchTag, setSearchTag] = useState("");

    return (
        <div className="studentContainer">
            <input className="searchBar" type='text' placeholder="Search by name" onChange={(event) =>{setSearchName(event.target.value);}}/>
            <input className="searchBar searchTagBar" type='text' placeholder="Search by tag" onChange={(event) =>{setSearchTag(event.target.value);}}/>

            {studentData.filter((val)=>{

                //Return all students when search and tag search is null
                if(searchName === "" && searchTag === ""){
                    return val;
                //Return name student
                }else if(fullName(val.firstName, val.lastName).toLowerCase().includes(searchName.toLowerCase()) && searchTag === ""){
                    return val;
                //Return tag student
                }else if(searchName === "" && tagMatch(val.tag, searchTag) === true){
                    return val;
                //Return student with name and tag
                }else if(fullName(val.firstName, val.lastName).toLowerCase().includes(searchName.toLowerCase()) && tagMatch(val.tag, searchTag) === true){
                    return val;
                //Return no student
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

//This function returns the full name of the student
const fullName = (firstName, lastName) =>{
    let fullName = "";
    return fullName + firstName + " " + lastName;
}

//This function goes through the array of tags for a student and returns true if searched tag is exist in the student
const tagMatch = (tag, searchTag) =>{
    let validCheck = false;
    
    for(let position = 0; position < tag.length; position++){
        if(tag[position].toLowerCase().includes(searchTag.toLowerCase())){
            validCheck = true;
        }
    }
    return validCheck;
}