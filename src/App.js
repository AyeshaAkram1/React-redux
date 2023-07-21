import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { Increment,Decrement } from './Actions/action';
function App() {
const state=useSelector((state)=>state)
const dispatch=useDispatch()
console.log(state.count)
// const {count}=state
// console.log(count)
  return (
    <div className="App">
      <button onClick={()=>dispatch(Increment())}>+</button>
        <span>{state.count}</span>
      <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  );
}

export default App;
