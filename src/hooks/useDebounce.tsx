import { useEffect, useState } from "react";

export function useDebounce(inp:string|number,time:number){

  const[dbval,setdbval]=useState(inp);
  
  useEffect(()=>{

    let val=setTimeout(()=>{
      console.log("triggering");
      setdbval(inp);
    },time)

    return()=>{
      clearTimeout(val);
    }
  },[inp])
  return dbval;
}