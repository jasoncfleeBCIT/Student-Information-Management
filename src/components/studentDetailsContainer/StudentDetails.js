import React, {useState} from 'react'
import StudentDetailsGradeAverage from '../studentDetails/StudentDetailsGradeAverage'
import StudentDetailsGradeList from '../studentDetails/StudentDetailsGradeList'
import StudentDetailsTag from '../studentDetails//StudentDetailsTag'
import StudentTagInput from '../studentDetails//StudentTagInput'

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
            <StudentTagInput updatedStudent={updatedStudentDataWithTag} theTag={tag} setTheTag={setTag}/>
        </div>
        
    )
}

export default StudentDetails
