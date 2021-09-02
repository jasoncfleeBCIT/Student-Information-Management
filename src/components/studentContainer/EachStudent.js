import React, {useState} from 'react'
import StudentPicture from '../studentDetails/StudentPicture'
import StudentName from '../studentDetails/StudentName'
import StudentDetails from '../studentDetailsContainer/StudentDetails'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';


const EachStudent = ({eachStudent}) => {

    const [show, setShow] = useState(false);

    return (
        <div className="student">
            <div className="studentLeft">
                <StudentPicture studentPicture={eachStudent.pic}/>
            </div>
            <div className="studentRight">
                <StudentName studentFirstName={eachStudent.firstName} studentLastName={eachStudent.lastName} />
                <StudentDetails 
                    studentEmail={eachStudent.email}
                    studentCompany={eachStudent.company}
                    studentSkill={eachStudent.skill}
                    studentGrade={eachStudent.grades}
                    studentGradeExpand={show}
                    updatedStudentDataWithTag={eachStudent}/>
            </div>

            <div className="buttonFarRight">
                <button className='buttonExpand' onClick={ () => setShow(!show)}>{show? <FaMinus/> : <FaPlus/>}</button>
            </div>
        </div>
    )
}

export default EachStudent
