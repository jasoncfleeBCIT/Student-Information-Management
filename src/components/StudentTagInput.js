import React, {useState} from 'react'

const StudentTagInput = ({updatedStudent}) => {

    const [tag, setTag] = useState("");

    return (
        <div className="studentAddTagContainer">
                <input className="addTagBar" type='text' placeholder='Add a Tag' onChange={(event)=> {setTag(event.target.value);}} onKeyPress={(event) =>{
                        //trigger if enter key is hit in the tag input box
                        if(event.key === 'Enter'){

                            //prevent blank tag from being created
                            if(tag.trim() !== ""){
                                updatedStudent.tag = [...updatedStudent.tag, tag]
                            }

                            //Clears input of all students after you press enter
                            for(let position = 0; position < document.getElementsByClassName('addTagBar').length; position++){
                                document.getElementsByClassName('addTagBar')[position].value = '';
                            }
                            setTag("");
                        }
                    }}/>
            </div>
    )
}

export default StudentTagInput
