import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import mainPage from "./main/pages/mainPage/mainPage";
import authenticationPage from "./users/pages/authenticationPage/authenticationPage";
import Backdrop from "./shared/components/UI/backdrop/backdrop";

const App: FC = () => {

  return(
    <BrowserRouter>
      <Backdrop onClick={123}/>
      <Switch>
        <Route path='/' component={mainPage} exact/>
        <Route path='/auth' component={authenticationPage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;