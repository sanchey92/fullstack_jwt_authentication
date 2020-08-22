import React, {FC} from "react";
import ReactDOM from 'react-dom';
import './backdrop.css';

type backdropType = {
  onClick: any
}

const Backdrop: FC<backdropType> = ({onClick}) => {

  const content = <div className='backdrop' onClick={onClick}/>
  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById('backdrop'))
}

export default Backdrop;