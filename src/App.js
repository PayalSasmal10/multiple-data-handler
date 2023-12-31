import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import {useState} from "react";

function App() {
  const [languages, setLanguages] = useState(data);

  const languageHandler = (index) =>{

  };

  return (
    <form className="App" action='#'>
      <label>Choose the skills :</label>
        {languages.map((item, index)=> {
          return(
            <div key={item.language}>
              <input type='checkbox' onClick={()=>languageHandler(index)}/>
              <label>{item.language}</label>
            </div>
          )
        }
        )}
    </form>
  );
}

export default App;
