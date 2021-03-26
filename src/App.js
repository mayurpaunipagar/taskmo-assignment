import "./App.css";
import React, { useEffect, useState } from "react";

const url="http://103.212.121.222:3000/task/1137/report/details/new";
function App(){
  const [questions,setQuestions]=useState([]);
  const [answers,setAnswers]=useState([]);
  const [userId,setUserId]=useState(0);
  const [taskId,setTaskId]=useState(0);

  useEffect(()=>{
    const fetchCall=async ()=>{
      const res1=await fetch(url);
      const res2=await res1.json()
      const {task_questions,task_answers}=res2;
      const [ansObj]=task_answers;
      const {user_id,task_id,answer}=ansObj;
      console.log(user_id,task_id);
      
      setTaskId(task_id);
      setUserId(user_id)
      const allQuestions=task_questions.map(({question})=>question);
      const allAnswers=answer.map(({answer})=>answer);
      console.log(ansObj);
      setQuestions([...allQuestions]);
      setAnswers([...allAnswers]);
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
          <tr>
            <td>{userId}</td>
            <td>{taskId}</td>
            {answers.map((a,idx)=> <td key={idx}>{a}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  </>
  
  
}

export default App;
