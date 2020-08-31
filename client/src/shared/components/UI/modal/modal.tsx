import React, {CSSProperties, FC, ReactNode} from "react";
import {CSSTransition} from "react-transition-group";

import Backdrop from "../backdrop/backdrop";
import ModalOverlay from "../modalOverlay/modalOverlay";

import './modal.css';

export type modalType = {
  show: boolean,
  header: string,
  footer: ReactNode,
  footerClass?: string,
  onSubmit?: () => void,
  onCancel: () => void,
  style?: CSSProperties,
  headerClass?: string,
  className?: string,
  contentClass?: string
}

const Modal: FC<modalType> = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel}/>}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames={'modal'}>
        <ModalOverlay {...props}/>
      </CSSTransition>
    </>
  )
}

export default Modal;