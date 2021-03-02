
import "../styles/Quickmenu.css"
import Container from "../components/Container.js"
import {Link} from "react-router-dom";
function Quickmenu({ type="qmn" }){

  
  return(
    <div className={ type }>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>
      <Link to="/Game">
      <Container id="qmctn"></Container>
      </Link>


    </div>
  )

}

export default Quickmenu