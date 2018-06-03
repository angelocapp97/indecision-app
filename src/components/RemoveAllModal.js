import React from 'react'
import Modal from 'react-modal'

export const RemoveAllModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        contentLabel="Remove options"
        closeTimeoutMS={200}
        className="modal">
            <div className="modal__header">
                <h3 className="modal__header__title">Removing options...</h3>
            </div>
            <div className="modal__body">
                {props.length === 1 && <p className="modal__body__content">Are you sure to remove the option?</p>}
                {props.length > 1 && <p className="modal__body__content">Are you sure to remove all {props.length} modal?</p>}
            </div>
            <div className="modal__footer">
                <button className="button modal__footer__content" onClick={props.toggle} data-result="cancel">Cancel</button>
                <button className="button modal__footer__content button--success" onClick={props.toggle} data-result="ok">Ok</button>
            </div>
    </Modal>
)