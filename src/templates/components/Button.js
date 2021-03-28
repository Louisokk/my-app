import "../styles/Button.css"
import Register from "./Register"

function Button({ val="Add", type="btn", useCase=null }){

  return(
    <button className={ type } onClick={ useCase }><p className="text">{ val }</p></button>
  )

}

export default Button