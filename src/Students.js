import React , { useState , useEffect , useContext}  from 'react'

import axios from 'axios';

export default  function    Student(props){
    // const [student_list, setStList]=useState([...props.studentDetails]) temp
    const student_list= [... props.studentDetails]
    console.log(student_list, "at first stance")
    const [teacherStatus , setTeacherStatus]=useState(0);
    const [idd , setid]=useState(0);


   return (
        <>
       <h1>Students List</h1>
      <table border={1}>
          <thead>
           
            <tr>
                <td>Id</td>
              <td>Name</td>
              <td>Class</td>
              <td>Teacher Name</td>
              <td>Action</td>
              
             
            </tr>
          </thead>
          <tbody>
            {student_list.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.Class}</td>
                <td>{data.teacher}</td>
                <td>
                    {teacherStatus===1 && data.id===idd ?
                    <>
                    <form onSubmit={(e)=>{AddingTeacher(e,data.id)}}>
                    <input className="teacher_Name" type="text" placeholder="Enter Teachers Name" name="teacher"></input> &nbsp;
                    <button type="Submit" >Assign Teacher</button> &nbsp;
                      <button onClick={()=>{cancelAssign()}}>Cancel</button>
                    </form>
                      
                     
                    </>
                    :
                    <><button onClick={() =>{AddTeacher(data.id)}}>Add Teacher</button><br/><br/></>}    
                    
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
    </> 
    )
  
  function AddingTeacher(e,id){
    e.preventDefault();
    console.log(e,"checking form ",id)
    const responseFunction = async ()=>{
    const  response=  await axios.put(`https://62152ebccdb9d09717b0e6f5.mockapi.io/Student/${id}`,
      {
        teacher:e.target[0].value,
      });
    console.log(response.data,"checking response")
    
    }
        responseFunction(); 
        const Ustudent_list=[...props.studentDetails]
        // console.log(Ustudent_list,"again checking")
        Ustudent_list.filter((a) => {
          if(a.id === id){
            a.teacher=e.target[0].value;
            console.log(a,"After update")
          }
          
        });
        // setStList(Ustudent_list)
        console.log(student_list,"student list")
        setTeacherStatus(0)
  }

  
  
  function cancelAssign(){
      setTeacherStatus(0);
    }


  function AddTeacher(id){
    console.log(id)
    setTeacherStatus(1);
    setid(id)
  }



  }