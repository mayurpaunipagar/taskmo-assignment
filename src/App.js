import "./App.css";
import React, { useEffect, useState } from "react";

const url="http://103.212.121.222:3000/task/1137/report/details/new";
function App(){
  const [questions,setQuestions]=useState([]);
  const [answers,setAnswers]=useState([]);

  useEffect(()=>{
    const fetchCall=async ()=>{
      const res1=await fetch(url);
      const res2=await res1.json()
      const {task_questions,task_answers}=res2;
      const allQuestions=task_questions.map(({question})=>question);

      console.log(task_answers);
      setQuestions([...allQuestions]);
      setAnswers([...task_answers])
    }
    fetchCall();
  },[])

  return <>
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Task Id</th>
            {questions.map((q,idx)=> <th key={idx}>{q}</th>)}
          </tr>
        </thead>
        <tbody>
         {answers.map(({task_id,user_id,answer})=>{
           return <tr>
             <td>{task_id}</td>
             <td>{user_id}</td>
             {answer.map(({answer},idx)=> <td key={idx}>{answer}</td>)}
           </tr>
         })}
        </tbody>
      </table>
    </div>
  </>
  
  
}

export default App;
