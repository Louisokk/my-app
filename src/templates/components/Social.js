import Input from "./Input"
import "../styles/Social.css"
import Button from "./Button"
import Register from "./Register"

function Social({open="sc"}){
    
    function openRegister(){
        document.getElementById("rgField").classList.remove("closed");
        document.getElementById("rgBackground").classList.remove("closed");
      }

    return(
        <div className={open}>
            <div className="sc-con">
                <p className="sc-header1">Anmeldung</p>
                <Input type="ipt socialinput" val="Accountname"></Input>
                <Input type="ipt socialinput" val="Passwort"></Input>
                <Button val="Anmelden" type="btn socialbutton"></Button>
                <Button val="Registrieren" type="btn socialbutton" useCase={ openRegister }></Button>
            </div>
        </div>

    )
}
export default Social