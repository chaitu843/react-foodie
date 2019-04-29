import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        //e.target.
    }

    render() {

        return ReactDOM.createPortal(
            <div id="myModal" className="modalStyle" ref={this.modalRef}>
                <div className="modalContentStyle" >
                    <span className="closeButtonStyle" onClick={this.closeModal}>&#10007;</span>
                    <div>{this.props.children}</div>
                </div>
            </div>, document.getElementById('modal-root')
        )
    }
}

export default Modal
