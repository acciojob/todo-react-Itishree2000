
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
   
  const[text,setText]=useState([]);
  const[inputValue,setInputValue]=useState("");

  function addInputValue(event){
    setInputValue(event.target.value);
  }
  
  function handelText(){
      if(inputValue.trim()!==('')){
        setText([...text,inputValue]);
        setInputValue('');
      }
  }

  function handelRemoveText(index){
    const updatedText = text.filter((_, i) => i !== index);
    setText(updatedText);

    }
  

  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-Do-List</h3>
        <input type="text" placeholder="" value={inputValue} onChange={addInputValue}/>
        <button onClick={handelText}>Add Todo</button>
          <ul>
          {text.map((todo,index)=>(
             <li key={index}>
            {todo}
             <button onClick={()=>handelRemoveText(index)}>Delete</button>
           </li>
          ))}
       </ul>
    </div>
  )
}

export default App
