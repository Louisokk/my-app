import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../FontAwesomeIcons"

function Footer({ link="#", type="ftr",}){

  
  return(
    <div className={ type }>
      <button className="smbtn">
      <FontAwesomeIcon icon={["fab" ,"instagram"]} className="igicn fa-3x"/>
      </button>
      <button className="smbtn">
      <FontAwesomeIcon icon={["fab" ,"facebook"]} className="igicn fa-3x"/>
      </button>
      <button className="smbtn">
      <FontAwesomeIcon icon={["fab" ,"youtube"]} className="igicn fa-3x"/>
      </button>
      <button className="smbtn">
      <FontAwesomeIcon icon={["fas" ,"envelope"]} className="igicn fa-3x"/>
      </button>
    </div>
  )

}

export default Footer