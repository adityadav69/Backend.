import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])
  const [author, setauthor] = useState('');
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

    axios.get('/api/aditya')
    .then((response)=>{
      setauthor(response.data);
    })
    .catch((error)=>{
      console.log(error);
      
    })
  }, [])
  


  return (
    <>
    <h1>Full stack application || Aditya Yadav</h1>
    <div>
      <h2>jokes Length: {jokes.length}</h2>

        {

          jokes.map((joke)=>{
            return(
              <div key={joke.id}>
                <h3>Joke Title: {joke.title}</h3>
                <p>Joke content: {joke.content}</p>
              </div>
            )
          })

        }   

        <h2>Author : {author}</h2>

    </div>
    </>
  )
}

export default App
