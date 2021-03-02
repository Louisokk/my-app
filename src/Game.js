import './App.css';
import Header from "./templates/components/Header.js"
import Footer from "./templates/components/Footer.js"
import Quickmenu from "./templates/components/Quickmenu.js"
import Play from "./templates/components/Play"
function Game() {
  return (
    <div className="App">
      <Header></Header>
      <Play></Play>
      <Quickmenu></Quickmenu>
      <Footer></Footer>

    </div>
  );
}

export default Game;
