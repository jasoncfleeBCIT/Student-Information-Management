import React from 'react'
import StudentDetailsGradeAverage from './StudentDetailsGradeAverage'
import StudentDetailsGradeList from './StudentDetailsGradeList'

const StudentDetails = ({studentEmail, studentCompany, studentSkill, studentGrade, studentGradeExpand}) => {
    return (
        <div className="studentDetailContainer">
            <p className='studentDetail'>Email: {studentEmail}</p>
            <p className='studentDetail'>Company: {studentCompany}</p>
            <p className='studentDetail'>Skill: {studentSkill}</p>
            <StudentDetailsGradeAverage eachStudentGrade={studentGrade}/>
            {studentGradeExpand && <StudentDetailsGradeList eachStudentGrade={studentGrade}/>}
        </div>
    )
}

export default StudentDetails