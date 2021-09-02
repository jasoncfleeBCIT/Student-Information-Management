import React, {useMemo} from 'react'

const StudentDetailsGradeAverage = ({eachStudentGrade}) => {
    const cacheStudentAverage = useMemo(() => {
        return averageGrade(eachStudentGrade)
    }, [eachStudentGrade])

    return (
        <div>
            <p className='studentDetail'>Average: {cacheStudentAverage}%</p>
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