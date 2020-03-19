import React from 'react';
import ReactDom from 'react-dom';
import history from '../src/history';

const Modal = props =>{
    console.log("Inside model");
    return ReactDom.createPortal(
        <div onClick = {()=>history.push(props.parentPage)} className="ui dimmer modals visible active" style = {{position: 'fixed'}}>
          <div onClick = {(e)=>e.stopPropagation()} className="ui standard modal visible active" style = {{margin: 'auto',position:'relative',height:'auto',width:'auto'}}>
            {props.contents}
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;

