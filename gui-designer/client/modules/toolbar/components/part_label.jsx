import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import cx from 'classnames';

import EditValue from './edit_value.jsx';

import validate_editable from '../lib/validate_if_editable_key.js';

const stylesheet = cssInJS({
    noneditable: {
        color: 'black'
    },

    editable: {
        cursor: 'pointer',

        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
        }
    }
});

const editValueModalStyle = (props) => { 
    const height = 40,
        width = 'auto';
    return {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 9999999
        },

        content: {
            position: 'absolute',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 5,
            paddingRight: 5,
            top: props.click_y - (height / 2),
            right: window.innerWidth - props.click_x + 50,
            left: 'auto',
            bottom: 'auto',
            height: height,
            width: width,
            border: '1px solid #ccc',
            borderRadius: 4,
            background: 'white',
            zIndex: 10000000
        }
} };

class PartLabel extends React.Component {
    editValueModal(event) {
        const {click, editValueModalOpen} = this.props;
        click(event.clientX, event.clientY);
        editValueModalOpen();

        event.preventDefault();
        event.stopPropagation();
    }

    onAfterOpen() {
        const input = ReactDOM.findDOMNode(this.refs._gui_designer_edit_value).getElementsByTagName('input')[0];
        if (input) {
            input.select();
            input.focus();
        }
    }

    render() {
        const {props} = this;
        const editable = validate_editable(props.path);
        const classes = cx(editable ? stylesheet.editable : stylesheet.noneditable);
        return (
            <strong
                className={classes}
                onClick={editable && this.editValueModal.bind(this)}
            >
                {props.node}
                
                { editable ?
                    <Modal
                        isOpen={props.is_edit_value_modal_open}
                        onAfterOpen={this.onAfterOpen.bind(this)}
                        onRequestClose={this.props.editValueModalClose}
                        style={editValueModalStyle(props)}>
                        <EditValue
                            ref='_gui_designer_edit_value'
                            closeModal={this.props.editValueModalClose}
                            {...props}/>
                    </Modal> :
                    null }
            </strong>
        );
    }
}

export default PartLabel;
