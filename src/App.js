import './App.css';
import Container from "./templates/components/Container.js"
import Header from "./templates/components/Header.js"
import Footer from "./templates/components/Footer.js"
import Quickmenu from "./templates/components/Quickmenu.js"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <Quickmenu></Quickmenu>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>      
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Link to="/Game">
      <Container></Container>
      </Link>
      <Footer></Footer>
    </div>
  );
}

export default App;
