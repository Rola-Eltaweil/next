"use client"

import { useEffect, useState } from "react"

export default function Posts(){
    const[todo,settodo]=useState({});
    
    useEffect(()=>{
        async function getdata(){
        const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data= await res.json()
        settodo(data)
        }
    getdata()

} ,[]

)
    return(
           <div>
             <p>{todo.title}</p>
            </div>
           
    )
}