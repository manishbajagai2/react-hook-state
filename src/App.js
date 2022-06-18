import "./App.css";
import { useState } from "react";

function App() {

  function heavyfn() {
    console.log("I will give the initial value ");
    return 10;
  }

  // const [count, setCount] = useState(10) // hardcoded value in the state
  // const [count, setCount] = useState(heavyfn()) // Function runs again and again

  // This function runs once -
  // const [count, setCount] = useState(()=>heavyfn())
  // const [count, setCount] = useState(heavyfn);

  // Managing both states at once using one setState
  // const [state, setState] = useState({count : 5, text : 'initial'})
  // const count = state.count;
  // const text = state.text;

  // Managing states independently
  const [count, setCount] = useState(heavyfn)
  const [text, setText] = useState('initial')

  function decreasingCount() {
    // setCount((prevCount) => prevCount - 1);

    // setState(prevCount =>{
      // overrides another state with the new state :
      // return { count : prevCount.count - 1 }

      // mutates or copies previous state :
      // return { ...prevCount, count : prevCount.count - 1 }

      // overriding both states with a new one :
      // return { count : prevCount.count - 1, text : 'decreasing' }

    // })

    setCount(prevState => prevState - 1);
    setText('decreasing')

  }

  function increasingCount() {
    // setCount((prevCount) => prevCount + 1);

    // setState(prevCount =>{
    //   return { count : prevCount.count + 1, text : prevCount.text = 'increasing' }
    // })

    setCount(prevState => prevState + 1);
    setText('increasing')
  }

  return (
    <div>
      <button onClick={decreasingCount}> - </button>
      <span> {count} </span> &ensp;
      <span> {text} </span>
      <button onClick={increasingCount}> + </button>
    </div>
  );
}

export default App;
