import React , { useState , useEffect}  from 'react'
import axios from 'axios';
import { Action } from 'history';


export default  function    Teachers(props){
    const teachers_list=[...props.teacherDetails]
    console.log(teachers_list , "I am in teachers funnction")
   
  
   return (
    
      <>
      <h1>Teachers List</h1>
      <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Teacher ID</td>
              
              <td>Subject</td>
            </tr>
          </thead>
          <tbody>
            {teachers_list.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.teacherId}</td>
                <td>{data.subject}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
    </> 
    )
   
  }