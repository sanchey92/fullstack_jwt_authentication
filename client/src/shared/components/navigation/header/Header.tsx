import React, {FC} from "react";

import './header.css';

const Header: FC = ({children}) => {
  return (
    <header className='main-header'>
      {children}
    </header>
  )
}

export default Header;