import {useState} from 'react';

const User=(props)=>{
  const[count]=useState(0);
  const[count2]=useState(1);
  return (
  <div className="user-card">
    <h1>Count:{count}</h1>
    <h1>Count:{count2}</h1>
     <h2>Name: {props.name}</h2>
     <h3>Location:Ballarshah</h3>
     <h4>@pragatidehankar1234</h4>
  </div>
  )
}
export default User;
