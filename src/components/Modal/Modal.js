import React, { Component } from 'react'

import './Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.modalRef = React.createRef();
    }

    openModal = (e) => {
        this.modalRef.current.style.display = "block";
    }

    closeModal = (e) => {
        this.modalRef.current.style.display = "none";
    }

    render() {

        return (
            <div id="myModal" className="modalStyle" ref={this.modalRef}>
                <div className="modalContentStyle" >
                    <span className="closeButtonStyle" onClick={this.closeModal}>&#10007;</span>
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default Modal
