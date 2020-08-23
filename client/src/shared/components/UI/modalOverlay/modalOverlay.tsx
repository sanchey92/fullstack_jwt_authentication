import React, {FC} from "react";
import ReactDOM from 'react-dom';

import {modalType} from "../modal/modal";

const ModalOverlay: FC<modalType> = (props) => {

  const {className, style, header, children, onSubmit, contentClass, headerClass, footerClass, footer} = props;

  const content =
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`model__content ${contentClass}`}>
          {children}
        </div>
        <footer className={`modal__footer ${footerClass}`}>
          {footer}
        </footer>
      </form>
    </div>
  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById('modal'))
}

export default ModalOverlay