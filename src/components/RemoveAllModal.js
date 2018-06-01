import React from 'react'
import Modal from 'react-modal'

export const RemoveAllModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        contentLabel="Remove options">
        <h3>Removing options...</h3>
        {props.length === 1 && <p>Are you sure to remove the option?</p>}
        {props.length > 1 && <p>Are you sure to remove all {props.length} modal?</p>}
        <button onClick={props.toggle} data-result="cancel">Cancel</button>
        <button onClick={props.toggle} data-result="ok">Ok</button>
    </Modal>
)