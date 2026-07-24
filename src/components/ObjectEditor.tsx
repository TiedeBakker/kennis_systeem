"use client";


import {useEffect,useState} from "react";


export default function ObjectEditor(
{
 object,
 onSaved
}:any
){

const [label,setLabel]=useState("");


useEffect(()=>{
 setLabel(object?.label ?? "");
},[object]);


async function save(){

  const method = object
    ? "PUT"
    : "POST";


  await fetch("/api/objects",{

    method,

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({

      id: object?.id,

      label

    })

  });


  setLabel("");

  onSaved();

}

return (

<div>

<h2 className="font-bold mb-2">
 Details
</h2>


<input
 className="border p-2 w-full"
 placeholder="Objectnaam"
 value={label}
 onChange={
  e=>setLabel(e.target.value)
 }
/>


<button
 className="border px-4 py-2 mt-3"
 onClick={save}
>
 Opslaan
</button>


</div>

);

}