// import React from 'react'

// function App() {
//   const number=[1,2,3]
//   const numlist=number.map((item)=>
// <li key={number.toString()}>{number}</li>
//   )
//   return <>
//   <ul>{numlist}</ul>
//   <h1>welcome</h1>


//   </>
// }

// export default App

// import React,{useState}from 'react'

// function App() {
//   const [name,setName]=useState("")

//   const handleChange=(event)=>{
//    setName(event.target.value)

//   }
//   return <>
//   <h1>welcome </h1>
//   <h2>Name:{name}</h2>
//   <lable>
//     <input type="text" value={name} onChange={handleChange}/>
//   </lable>
//   </>
// }

// export default App

import React, { useEffect ,useState} from 'react'
import "./App.css"

function App() {
  const[users,setUsers]=useState([]);
  const[numbers,setNumbers]=useState([1,2,3,4,5,6,8,7,9])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
   .then((res)=>res.json())
   .then((josn)=>setUsers(josn))

  },[])

const mapedarr=()=>{
//  let filterdata=users.filter((user)=>{
//   return user.name==="Ervin Howell"
//  })
//  console.log(filterdata)
 }


  return <>
  {/* <h1>welcome</h1>
 <div className='app'>
  <h1>users</h1>
  <div className='card'>
    {users.map((user)=>(
    <div className='card-inner'>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
    ))}
  </div>

 </div> */}
 <div>
 {
  numbers.map((number)=>{
   <div>{number}</div>
  })
 }
 </div>
 {/* <button onClick={mapedarr}>maped arr</button> */}

  </>
}

export default App