import "../styles/Button.css"
import Register from "./Register"

function Button({ val="Add", type="btn", useCase=null, slot="" }){

  return(
    <button className={ type } onClick={ useCase }><p className="text">{ val }</p>{slot}</button>
  )

}

export default Button