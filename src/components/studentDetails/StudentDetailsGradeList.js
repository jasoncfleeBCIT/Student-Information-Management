import React from 'react'

const StudentDetailsGradeList = ({eachStudentGrade}) => {
    return (
        <div className="studentGradeContainer">
            {eachStudentGrade.map((studentGradeList, index)=>(
                <p key={index + 1} className='studentGradeDetail'>Test {index + 1}: &emsp;&ensp;{studentGradeList}%</p>
            ))}
        </div>
    )
}

export default StudentDetailsGradeList
