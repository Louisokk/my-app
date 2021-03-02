import App from "./App"
import Game from "./Game"
import { Route, Switch } from "react-router-dom"
import "../src/Router.css"


function Router(){
   return(
   <div className="Route">
        <Switch> 
        <Route exact path="/" component={App}/>
        <Route path="/Game" component={Game}/>
        </Switch>
    </div>
   )
}
export default Router