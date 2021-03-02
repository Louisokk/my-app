
import "../styles/Button.css"


function Button({ val="Add", type="btn" }){

  
  return(
    <button className={ type }><p className="text">{ val }</p></button>
  )

}

export default Button