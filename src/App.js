import './App.css';
import data from "./data.json";
import {useState} from "react";

function App() {
  const [languages, setLanguages] = useState(data);
  const [input, setInput] = useState('');
  const [showSelectedLang, setShowSelected] = useState([]);

  const languageHandler = (index) =>{
      const selectedData = languages.filter((lang, indx) => index === indx);
      setShowSelected([...showSelectedLang, selectedData]);
  };

  return (
    <form className="App" action='#'>
      <input type='text' onChange={(e) => setInput(e.target.value)}/>
      <div>{showSelectedLang}</div>
    </form>
  );
}

export default App;
