import React from 'react'

const StudentDetailsTag = ({updatedStudent}) => {
    return (
        <div className="studentTagContainer">
            {updatedStudent.tag.map((eachTag, index)=>(
                <span key={index + 1} className='studentTag'>{eachTag}</span>
            ))}
        </div>
    )
}

export default StudentDetailsTag
