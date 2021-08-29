import React, {useState, useEffect} from "react"
import axios from 'axios';
import Students from './components/Students'

function App() {

    useEffect(() =>{
      getStudentData();
    }, [])

    const [studentData, setStudentData] = useState([]);

    const getStudentData = async() => {
      try{
        const apiData = await axios.get(`https://api.hatchways.io/assessment/students`);
        setStudentData(apiData.data.students.map((student) => ({...student, tag: []})));
      }catch(err){
        alert(err.message);
      }
    }

  return (
    <div className="container">
      <Students studentData={studentData}/>
    </div>
  );
}

export default App;
