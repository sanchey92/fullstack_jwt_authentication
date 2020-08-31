import React, {FC} from "react";
import {NavLink, useHistory} from "react-router-dom";

import './links.css'
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../../../../redux/StoreInterface";
import {postLogout} from "../../../../redux/Authentication/actions/actionCreators";

const Links: FC = () => {

  const authState = useSelector((state: StoreInterface) => state.authState);
  const history = useHistory();
  const dispatch = useDispatch();

  const {token} = authState

  const clickLogoutHandler = () => {
    localStorage.removeItem('userTokenData');
    dispatch(postLogout());
    history.push('/auth');
  }

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>MAIN PAGE</NavLink>
      </li>
      {
        !token
          ? <li>
            <NavLink to='/auth'>AUTH</NavLink>
          </li>
          : <button onClick={clickLogoutHandler}>Logout</button>
      }

    </ul>
  )
}

export default Links;