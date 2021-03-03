import { render } from "@testing-library/react";
import Input from "./Input"
import "../styles/Social.css"
import Button from "./Button"
function Social({open="sc"}){
    return(
        <div className={open}>
            <div className="sc-con">
                <p className="sc-header1">Anmeldung</p>
                <Input type="ipt socialinput" val="Accountname"></Input><br></br>
                <Input type="ipt socialinput" val="Passwort"></Input><br></br>
                <Button val="Anmelden"></Button>
            </div>
        </div>

    )
}
export default Social