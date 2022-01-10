import './App.css';
import {useState} from "react"
import Modal from "./components/Modal/Modal"
import Rules from "./components/Rules/Rules"
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Game from './components/Game/Game';
function App() {
  const [modal, setModal] = useState(true)
  const [bonus, setBonus] = useState(true)
  const [score, setScore] = useState(0)
  return (
    <main className="App">

      {modal && <Modal setModal={setModal} modal={modal}/>}
      {modal && <Rules bonus={bonus} setModal={setModal} modal={modal}/>}
      <ScoreBoard score={score} bonus={bonus} />
      <Game bonus={bonus}/>
    </main>
  );
}

export default App;
