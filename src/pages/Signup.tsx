import React, { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


type event= React.FormEvent<HTMLFormElement>;// type defining event globally so no need to type it again
// can directly use type event later



const Signup = () => {

 const[name,setname]=useState("");
 const[num,setnum]=useState("")
 const[email,setemail]=useState("")


useDebounce(name,500);  //debounce hooks to reduce the rerenders, taking the state variables and giving them to hooks
useDebounce(num,500);   //debounce time is in ms
useDebounce(email,500);

const navigate=useNavigate();

// using react-hot-toast for sending toast about errors if user does not enter all three values 



//***user cannot leave the input fields empty and submit the form***
 const oncall=(e:event)=>{
  e.preventDefault();
 if(num!=""&&name!=""&&email!=""){
  const userDetails:string=JSON.stringify({name,num,email,timeStamp:new Date().getTime()});
  localStorage.setItem("user",userDetails);
  navigate("/home");
 }
 else{
   return toast.error("please enter valid input");
 }
 }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="1"  height="1">
    <Box >
    <Typography variant="h6" align='center' fontFamily="-moz-initial">
            User Details
    </Typography>
      <form onSubmit={oncall}>
        <Box display="flex" flexDirection="column" gap="2">
        <TextField label="name" sx={{borderRadius:"20px"}} value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <TextField label="num" type="tel" inputProps={{ pattern: "[0-9]{10}" }}  helperText="Enter a 10-digit phone number" value={num} onChange={(e)=>{setnum(e.target.value)}}/>
        <TextField label="email"   type="email" helperText="Enter a valid email address" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          <Button type="submit">Submit</Button>
          </Box>
      </form>
    </Box>
    
    </Box>
  )
}

export default Signup
