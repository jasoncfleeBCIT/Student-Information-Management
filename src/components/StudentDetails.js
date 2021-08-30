import React, {useState} from 'react'
import StudentDetailsGradeAverage from './StudentDetailsGradeAverage'
import StudentDetailsGradeList from './StudentDetailsGradeList'
import StudentDetailsTag from './StudentDetailsTag'

const StudentDetails = ({studentEmail, studentCompany, studentSkill, studentGrade, studentGradeExpand, updatedStudentDataWithTag}) => {

    const [tag, setTag] = useState(""); 

    return (
        <div className="studentDetailContainer">
            <p className='studentDetail'>Email: {studentEmail}</p>
            <p className='studentDetail'>Company: {studentCompany}</p>
            <p className='studentDetail'>Skill: {studentSkill}</p>
            <StudentDetailsGradeAverage eachStudentGrade={studentGrade}/>
            {studentGradeExpand && <StudentDetailsGradeList eachStudentGrade={studentGrade}/>}
            <StudentDetailsTag updatedStudent={updatedStudentDataWithTag}/>

            <div className="studentAddTagContainer">
                <input className="addTagBar" type='text' placeholder='Add a Tag' onChange={(event)=> {setTag(event.target.value);}} onKeyPress={(event) =>{
                        //trigger if enter key is hit in the tag input box
                        if(event.key === 'Enter'){
                            
                            //prevent blank tag from being created
                            if(tag.trim() !== ""){
                                updatedStudentDataWithTag.tag = [...updatedStudentDataWithTag.tag, tag]
                            }

                            //Clears input of all students after you press enter
                            for(let position = 0; position < document.getElementsByClassName('addTagBar').length; position++){
                                document.getElementsByClassName('addTagBar')[position].value = '';
                            }
                            setTag("");
                        }
                    }}/>
            </div>
            
        </div>
        
    )
}

export default StudentDetails
