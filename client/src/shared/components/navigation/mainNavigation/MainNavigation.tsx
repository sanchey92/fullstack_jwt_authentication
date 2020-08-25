import React, {FC, useState} from "react";
import {Link} from "react-router-dom";

import Header from "../header/Header";
import Links from "../links/Links";
import SideDrawer from "../sideDrawer/SideDrawer";
import Backdrop from "../../UI/backdrop/backdrop";

import './mainNavigation.css'

const MainNavigation: FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false)

  return (
    <>
      {isOpen && <Backdrop onClick={closeHandler}/>}
      <SideDrawer show={isOpen} onClick={closeHandler}>
        <nav className='main-navigation__drawer-nav'>
          <Links/>
        </nav>
      </SideDrawer>
      <Header>
        <button
          className="main-navigation__menu-btn"
          onClick={openHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">APP LOGO</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <Links/>
        </nav>
      </Header>
    </>
  )
}

export default MainNavigation