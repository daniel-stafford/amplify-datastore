import logo from './cage.png';
import './App.css';

function App() {
  function createPost(){
 console.log("Create post clicked")
  }
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => createPost()}>
        "I'd Like to take his face.....off"
      </button>
      </header>
    </div>
  );
}

export default App;
