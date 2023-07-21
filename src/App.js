import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={dispatch(()=>Increment())}>+</button>
        <span>{state.count}</span>
      <button onClick={dispatch(()=>Decrement())}>-</button>
    </div>
  );
}

export default App;
