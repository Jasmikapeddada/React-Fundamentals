import './App.css'
import { useState } from 'react'

function App() {

  // const handleClick=(name)=>{
  //   // alert('Button Clicked!')
  //   console.log('Button was clicked')
  //   alert('Hello'+name)
  // }

  // let count =0;
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // }

  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })

    // console.log(event.target.name)
    // console.log(event.target.value)
  }

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  const handleSubmit = (event) => {
    alert('You are Successfully Logged In\nYour Details are:\nEmail: ' + formData.email + '\nPassword: ' + formData.password);
    event.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name='myName' placeholder='Enter your name' onChange={handleChange}/> */}
        <input type="email" name='email' placeholder='Enter your email' onChange={handleChange} /><br></br><br></br>
        <input type="password" name='password' placeholder='Enter your password' onChange={handleChange} /><br></br><br></br>
        {/* <button onClick={()=>handleClick("Jasmika")}>Click Me</button> */}
        <button type="submit">Login</button>
      </form>

      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default App