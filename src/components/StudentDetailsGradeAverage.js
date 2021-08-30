import React from 'react'

const StudentDetailsGradeAverage = ({eachStudentGrade}) => {

    return (
        <div>
            <p className='studentDetail'>Average: {averageGrade(eachStudentGrade)}%</p>
        </div>
    )
}

export default StudentDetailsGradeAverage

// this function calculates the average of array of student grades from the api data
const averageGrade = (gradeArray) => {
    let sum = 0; 
    for (let position = 0; position < gradeArray.length; position++){
        sum = sum + parseInt(gradeArray[position]);
    }
    return sum / gradeArray.length;
}