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
        console.log(e);
        this.modalRef.current.style.display = "block";
    }

    closeModal = (e) => {
        console.log(e);
        this.modalRef.current.style.display = "none";
    }

    render() {
        console.log(this.props.children)
       
            

        return (
            <div style={{
                display: "inline"
            }} >
                <span id="myBtn" title="favorites" onClick={this.openModal} style={{
                    fontSize: "36px",
                    float: "right"
                }}>&#9829;</span>
                <div id="myModal" className="modalStyle" ref={this.modalRef}>
                    <div className="modalContentStyle" >
                        <span className="closeButtonStyle" onClick={this.closeModal}>&#10007;</span>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
