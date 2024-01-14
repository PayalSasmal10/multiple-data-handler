import './App.css';
import data from "./data.json";
import {useState} from "react";

function App() {
  const [languages, setLanguages] = useState(data);
  const [input, setInput] = useState('');
  const [showSelectedLang, setShowSelected] = useState([]);

  const languageHandler = () =>{
      
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(input)
  };

  return (
    <form className="App" action='#'>
      <input type='text' onChange={onChangeHandler}/>
      <div>{showSelectedLang}</div>
    </form>
  );
}

export default App;
