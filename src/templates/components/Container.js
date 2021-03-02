import Gamelogo from "../assets/Logo.png"
import "../styles/Container.css"


function Container({ type="ctn", id}){

  
  return(
    <div className={ type } id={id}><img class="gl" src={Gamelogo}></img></div>
  )

}

export default Container