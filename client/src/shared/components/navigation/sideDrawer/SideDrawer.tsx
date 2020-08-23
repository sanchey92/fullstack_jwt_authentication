import React, {FC} from "react";
import ReactDOM from 'react-dom';
import {CSSTransition} from "react-transition-group";

import './sideDrawer.css';

type sideDrawerType = {
  show: boolean,
  onClick: () => void
}

const SideDrawer: FC<sideDrawerType> = ({children, show, onClick}) => {

  const content =
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={onClick} className='side-drawer'>
        {children}
      </aside>
    </CSSTransition>
  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById('drawer'))
}

export default SideDrawer;