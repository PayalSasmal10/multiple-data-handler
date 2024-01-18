import './App.css';
import data from "./data.json";
import {useState} from "react";

function App() {
  const [languages, setLanguages] = useState(data);
  const [input, setInput] = useState('');
  const [showSelectedLang, setShowSelected] = useState([]);


  const onChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
    const showFilteredData = languages.language.map((language) => language.includes(input));
    setLanguages(showFilteredData);
    console.log(languages);
  };

  return (
    <form className="App" action='#'>
      <input type='text' onChange={onChangeHandler}/>
      <div>{languages.language}</div>
    </form>
  );
}

export default App;





