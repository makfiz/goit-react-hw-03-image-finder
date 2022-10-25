import React, { Component } from "react";
import { createPortal } from 'react-dom';

import { Backdrop, ContentContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown = (e) => {
        if (e.key === 'Escape') {
           this.props.onClick()
        }  
    }

    onClickBackdrop = (e) => {
        if (e.currentTarget === e.target) {
           this.props.onClick()
        }  
    }

    render() {
        return createPortal(
            <Backdrop onClick={(e) => this.onClickBackdrop(e)}>
                <ContentContainer>{this.props.children}</ContentContainer>
            </Backdrop>,
            modalRoot

        )
    }
}

export default Modal