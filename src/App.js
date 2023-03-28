
import './App.css';

import {useState} from "react";

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function registerUser(event)
  {



    event.preventDefault();

    const bodyContents = `{"name":"${name}","email":"${email}","password":"${password}"}`
    console.log(bodyContents);

    const requestBody = JSON.parse(bodyContents);
    console.log(requestBody);
    console.log(bodyContents);
    const response = await fetch('/api/user/register',{
      method:'POST',
      body:requestBody,
      headers:
      {
        'Content-type': 'application/json'
      }
    }).then( async(data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
    console.log(response);
  }

  return (
    <div >
      <h1> Register </h1>
      <form onSubmit={registerUser}>
          <input type="text" 
          placeholder="Name"
          value={name}  
          onChange={(e)=>setName(e.target.value) }
          />
          <input type="text" 
          placeholder="Email"
          value={email}  
          onChange={(e)=>setEmail(e.target.value) }
          />
          <input type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e)=>setPassword(e.target.value) }
          />
          <input type="submit" value="Register"/>
      </form>
    </div>
  );
}

export default App;
