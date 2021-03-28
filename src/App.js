import './App.css';
import Container from "./templates/components/Container.js"
import Header from "./templates/components/Header.js"
import Footer from "./templates/components/Footer.js"
import Quickmenu from "./templates/components/Quickmenu.js"
import { Link } from "react-router-dom"
import Social from "./templates/components/Social"
import Register from "./templates/components/Register"

function App() {
  return (
    <div className="App"> 
      <Register></Register>
      <Header></Header>
      <Quickmenu></Quickmenu>
      <Social></Social>
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
