import axios from "axios";
import { useEffect, useState } from "react"
import "./App.css"


function App() {
 const [git, setGit] = useState([]);

 useEffect(()=>{
  axios.get("https://api.github.com/users/VishalNayek")
  .then(function(response){
    setGit(response.data);
  })
 },[])

 return (
  <div className="card-container"> 
      <div className="card">
        <img src={git.avatar_url} alt="Avatar" className="avatar" />
        <h2>{git.name}</h2>
        <p>{git.bio}</p>
        <div className="p-container"> 
            <p>Public Repos: {git.public_repos}</p>
            <p>Twitter: {git.twitter_username}</p>
          </div>
      </div>
  </div>
);
 }


export default App
