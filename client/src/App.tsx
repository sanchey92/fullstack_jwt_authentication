import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import mainPage from "./main/pages/mainPage/mainPage";
import AuthenticationPage from "./users/pages/authenticationPage/authenticationPage";
import MainNavigation from "./shared/components/navigation/mainNavigation/MainNavigation";

const App: FC = () => {

  return(
    <BrowserRouter>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path='/' component={mainPage} exact/>
          <Route path='/auth' component={AuthenticationPage} exact/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;