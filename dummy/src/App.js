import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [text,setText] = useState('');
  const [name,setName] = useState('love');

  // variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE")
  // });

  // variation 2 -> First Render
  // useEffect(() => {
  //   console.log("ui rendering done");
  // },[]);

  // variation 3 -> on First Render + whenever dependency changes
  // useEffect(() => {
  //   console.log("Change observed")
  // }, [name] );

  // variation 4 -> to handle unmounting of a component
  useEffect(() => {
    // add event listener
    console.log("listener added");
    return () => {
      console.log("Listener removed")
    }
  }, [text]);

  function changeHandler(event) {
    setText(event.target.value);  
    console.log(text);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
