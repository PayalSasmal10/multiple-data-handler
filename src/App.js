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
      <select>
        {languages.map((item, index)=> {
          return(
              <option>{item.language}</option>
          )
        }
        )}
        </select>
    </form>
  );
}

export default App;
