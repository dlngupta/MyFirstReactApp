import logo from './logo.svg';
import './App.css';
import Welcome from './Components/welcome';
import Greet from './Components/greet';
import Message from './Components/message';
import StateComp from './Components/stateComp';
import Counter from './Components/counter';


function App() {
  return (
    <div className="App">
      <Counter/>
      <Welcome name='Yogi' age='31'/>
      <Greet name='India'>This if first Greet component</Greet>
      {/* <StateComp/> */}
      {/* <Welcome name='Gupta' age='28'>This is first block of Welcome Component</Welcome>
      <Welcome name='Yogi' age='31'/>
      <Welcome name='Mahesh' age='30'/>
      <Welcome name='Ashok' age='29'/>
      <Greet name='India'>This if first Greet component</Greet> */}
      {/* <Greet/>
      <Message/>
      <Message/>
      <Message/> */}
    </div>
  );
}

export default App;
