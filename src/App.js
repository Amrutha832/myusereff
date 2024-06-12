import React, { useEffect } from 'react'
import { useRef } from 'react'
 const App = () => {
  const data=useRef(null);
  const submitHandler=e=>{
 e.preventDefault();
 console.log(data.current.value)
 }

 useEffect(()=>{
data.current.focus();
 },[])
  return (
    <div>
      <form onSubmit={submitHandler}>
      <center>
     <input ref={data} type="text" placeholder="enter your name "/> <br/>
     <input type="Submit" />
     </center>
     </form>
    </div>
  )
}

export default App;
//Sure, the useRef hook is a React hook used for creating a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
