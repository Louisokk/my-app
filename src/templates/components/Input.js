
import "../styles/Input.css"


function Input({ val="Suche", type="ipt", id }){
  
  
  return(
    <input className={ type } placeholder={ val } id={id}></input>
  )

}


export default Input