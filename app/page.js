"use client";
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  };
  let renderTask = "No Task Available";
  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return(
      <> 
       <li key={i} className='list-none'>
       <div className='flex items-center justify-between'>
        <h5>{t.title}</h5>
        <h5>{t.desc}</h5>
        <button
        onClick={()=>{
          deleteHandler(i);
        }}
        className='bg-red-500 px-2 py-1 rounded text-white mb-4'>Delete</button>
      </div>
     </li>
     </>
    )
  })}
  return ( 
    <>
    <h1 className='bg-black text-6xl text-center p-5 font-bold text-white'>My Todo List</h1>
    <form className='m-5' onSubmit={submitHandler}>
      <input type='text' placeholder='Enter Title Here' className='m-5 px-3 py-2 border-2 border-black text-xl'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}/>
      <input type='text' placeholder='Enter Description' className='m-5 px-3 py-2 border-2 border-black text-xl'
      value={desc}
      onChange={(e)=>{
        setDesc(e.target.value);
      }}/>
      <button className='bg-black text-xl px-3 py-2 rounded m-5 text-white'>Add Task</button>
    </form>
    <div className='p-10 pb-14 bg-zinc-300 h-auto'>
      <h2>{renderTask}</h2>
    </div>
    </>
  );
}
 
export default page;