import React, { useState  } from 'react';
import Student from './Students'
import './App.css';
import Teacher from './Teachers'
import axios from 'axios';
import { Context } from './Context';

export default function App() {
  const [viewT , setTeacher]=useState(0)
  const [viewS , setStudent]=useState(0)
  const [viewCT , setCreateTeacher]=useState(0)
  const [viewCS , setCreateStudent]=useState(0)
  const [viewAT , setAddTeacher]=useState(0)
  const [teacher_array , setArray]=useState([])
  const [student_array , setStudentArray]=useState([])
 
 


 return (
    <>
      <div className="head">
            <h1>Dashboard</h1>
            <div className="bttns">
                <button onClick={()=>{TeacherAction()}}variant="contained">
                Teacher's Data
                </button>
                <button onClick={()=>{ct()}} variant="contained">
                Create Teachers Data
                </button>
              
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>{StudentAction()}} variant="contained">
                Student's Data
                </button>
                <button onClick={()=>{csButton()}} variant="contained">
                Create Student Data
                </button> &nbsp;&nbsp;&nbsp;
               
               
                
            </div>   
      </div>
      <div className="body">
        <div>
            {viewT===1? <Teacher teacherDetails={teacher_array} />:<></>}
            {viewS===1? <Student studentDetails={student_array} setStudentArray={setStudentArray} setStudent={setStudent}/>:<></>}
        </div>
        
        <div>
          {viewCT===0?<></>:<form onSubmit={(e)=>{CreateTeacher(e)}}>
          <table>
            <thead>
              <tr>
                <td><h3>Enter Teachers Details</h3></td>
              </tr>
            
            </thead>

            <tbody>
            <tr>
                <td><label>Name</label></td>
                <td><input type="text" name="name" placeholder='Teachers Name'  ></input></td>
            </tr>
            
            <tr>
                <td><label>Teachers ID</label></td>
                <td><input type="text" name="TeacherID" placeholder='Teachers ID'></input></td>
            </tr>

            <tr>
                <td><label>Subject</label></td>
                <td><input type="text" name="Subject" placeholder='Subject'></input></td>
            </tr>

            <tr>
              <button type="submit">Submit</button>
            </tr>

           
            </tbody>
            
          </table>
          </form>}

          


          {viewCS===0?<></>:<form onSubmit={(e)=>{CreateStudent(e)}}>
          <table>
            <thead>
              <tr>
                <td><h3>Enter Student Details</h3></td>
              </tr>
            
            </thead>

            <tbody>
            <tr>
                <td><label>Name</label></td>
                <td><input type="text" name="name" placeholder='Student Name'  ></input></td>
            </tr>
            
            <tr>
                <td><label>Class</label></td>
                <td><input type="text" name="class" placeholder='Class'></input></td>
            </tr>

            <tr>
                <td><label>Teacher</label></td>
                <td><input type="text" name="teacher" placeholder='Teachers Name'></input></td>
            </tr>

            <tr>
              <button type="submit">Submit</button>
            </tr>

           
            </tbody>
            
          </table>
          </form>}
          
        </div>    
      </div>
      
    
     </>
  
    
  );

  function TeacherAction(){
    setTeacher(1)
    setStudent(0)
    setCreateTeacher(0)
    setCreateStudent(0)
    
    console.log("I m in get function")
   

      const responseFunction = async ()=>{   ///here i m defining the function 
        const  response= await axios.get('https://62152ebccdb9d09717b0e6f5.mockapi.io/Teacher' );
       setArray(response.data)
      
      };
      responseFunction();   // here i m calling the function
      
    
  // },[]); 
    
  }

  function ct(){
    TeacherAction()
    setCreateTeacher(1)
    setTeacher(1)
    setStudent(0)
    setCreateStudent(0)
  }
  

  function CreateTeacher(e){
  e.preventDefault()
  console.log(e.target[0].value,e.target[1].value,e.target[2].value)
      const responseFunction = async ()=>{
      const  response=  await axios.post('https://62152ebccdb9d09717b0e6f5.mockapi.io/Teacher',
    {
      name:e.target[0].value,
      teacherId:e.target[1].value,
      subject:e.target[2].value,
      
    });
    
      // console.log(response.data,"checking my response")
    let teacherDetails=[...teacher_array]
    teacherDetails.push(response.data)
 
    setArray(teacherDetails)
    // console.log(teacher_array,"Checking my new array")
    e.target[0].value=""
    e.target[1].value=""
    e.target[2].value=""
 
    };
   responseFunction();
  }



  function StudentAction(){
    setStudent(1)
    setTeacher(0)
    setCreateTeacher(0)
    setCreateStudent(0)
 
      const responseFunction = async ()=>{   ///here i m defining the function 
        const  response= await axios.get('https://62152ebccdb9d09717b0e6f5.mockapi.io/Student' );
      setStudentArray(response.data)
        console.log(response.data,"checking response operation")
        console.log(student_array,"Checkinh export end")
      };
      responseFunction();   // here i m calling the function
  

 
  }


  function csButton(){
    StudentAction()
    setCreateTeacher(0)
    setTeacher(0)
    setStudent(1)
    setCreateStudent(1)
  }



  function CreateStudent(e){
   e.preventDefault()
 
   console.log(student_array, "getting student array")
      const responseFunction = async ()=>{
      const  response=  await axios.post('https://62152ebccdb9d09717b0e6f5.mockapi.io/Student',
    {
      name:e.target[0].value,
      Class:e.target[1].value,
      teacher:e.target[2].value,
      
    });
    // console.log(response,"checking response")
    let studentDetails=[...student_array]   
    
    studentDetails.push(response.data)

    setStudentArray(studentDetails)
    }
        responseFunction(); 
        e.target[0].value=""
    e.target[1].value=""
    e.target[2].value=""
  }

   


}

















