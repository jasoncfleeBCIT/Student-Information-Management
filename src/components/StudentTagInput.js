import React from 'react'

const StudentTagInput = ({updatedStudent , theTag, setTheTag}) => {

    return (
        <div className="studentAddTagContainer">
                <input className="addTagBar" type='text' placeholder='Add a Tag' onChange={(event)=> {setTheTag(event.target.value);}} onKeyPress={(event) =>{
                        //trigger if enter key is hit in the tag input box
                        if(event.key === 'Enter'){

                            //prevent blank tag from being created
                            if(theTag.trim() !== ""){
                                updatedStudent.tag = [...updatedStudent.tag, theTag]
                            }

                            //Clears input of all students after you press enter
                            for(let position = 0; position < document.getElementsByClassName('addTagBar').length; position++){
                                document.getElementsByClassName('addTagBar')[position].value = '';
                            }
                            setTheTag("");
                        }
                    }}/>
            </div>
    )
}

export default StudentTagInput
