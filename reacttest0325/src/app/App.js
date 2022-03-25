import React, {useState, useEffect} from "react";
import Jokes from "../../../../classesbootstrap/src/components/jokes/Jokes";
import './App.css';

function App(){
  const [joke, setJoke] = useState([])
  useEffect(()=>{
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10")
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      setJoke(res.value)
    })
  }, [])
  render(){
    if(this.state.jokes.length){
        return(
            <>
                <h2>Jokes list</h2>
                <div className="row">
                    {jokes.map((j)=>(
                      <Joke
                        key={j.id}
                        setup={j.setup}
                        delivery={j.delivery}
                        />
                    ))}
                </div>
            </>
        )
    }
  
  }
}
export default App