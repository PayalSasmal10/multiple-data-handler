import './App.css';
import data from "./data.json";
import {useState} from "react";

function App() {
  const [languages, setLanguages] = useState(data);
  const [showSelectedLang, setShowSelected] = useState([]);

  const languageHandler = (index) =>{
      const selectedData = languages.filter((lang, indx) => index === indx);
      setShowSelected([...showSelectedLang, selectedData]);
  };

  return (
    <form className="App" action='#'>
      <label>Choose the skills :</label>
      <select>
        {languages.map((item, index)=> {
          return(
            <div key={item.language}>
              <option>{item.language}</option>
            </div>
          )
        }
        )}
        </select>
        <div>{showSelectedLang}</div>
    </form>
  );
}

export default App;
