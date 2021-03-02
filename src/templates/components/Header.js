import "../styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../FontAwesomeIcons"
import Input from "../components/Input.js"
import Logo from "../assets/Logo2.png"
import {  Link } from "react-router-dom";


function Header({ link="#", type="hdr",}){
  
  return(
    <div className={ type }>
      <Link to="/">
      <img src={Logo} className="lg"></img>
      </Link>
      <Input id="ipth"></Input>
      <button className="sbtn">
      <FontAwesomeIcon      
       icon="search" className="sicn fa-3x"/>
      </button>
    </div>
  )

}

export default Header