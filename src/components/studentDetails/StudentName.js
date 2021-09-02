import React from 'react'

const StudentName = ({studentFirstName, studentLastName}) => {
    return (
        <div className="studentNameContainer">
            <label>{studentFirstName.toUpperCase()} {studentLastName.toUpperCase()}</label>
        </div>
    )
}

export default StudentName
