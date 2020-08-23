import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import './links.css'

const Links: FC = () => {

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>MAIN PAGE</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>AUTH</NavLink>
      </li>
    </ul>
  )
}

export default Links;