import React from 'react'

const StudentPicture = ({studentPicture}) => {
    return (
        <div className="studentPictureContainer">
            <img className='studentPicture' src={studentPicture} alt=""></img>
        </div>
    )
}

export default StudentPicture
