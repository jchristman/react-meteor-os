import React from 'react';
import ReactDOM from 'react-dom';
import jss from 'react-jss';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import cx from 'classnames';
import _ from 'lodash';

import global_styles from '../../../configs/global-css.js';

const stylesheet = _.extend(global_styles, {
    default: {
        position: 'absolute',
        top: 'calc(100% - 300px)',
        bottom: -2,
        left: -2,
        right: 'calc(300px - 2px)',

        backgroundColor: 'white',

        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        zIndex: 1
    },

    textarea: {
        position: 'absolute',
        height: 'calc(100% - 12px)',
        width: 'calc(100% - 12px)',
        padding: 5,

        fontSize: 'large'
    },

    copy_to_clipboard: {
        position: 'absolute',
        top: 'auto',
        left: 'auto',
        bottom: 10,
        right: 20
    },

    tooltip: {
        position: 'absolute',
        top: 7,
        right: 20,
        zIndex: 2,
        cursor: 'pointer'
    }
});

const copyModalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100
    },

    content: {
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        right: 'calc(50% - 50px)',
        bottom: 'calc(50% - 50px)',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        borderRadius: 10,
        padding: 20,
        zIndex: 101,

        textAlign: 'center',
        fontSize: 50,

        color: 'white'
    }
}

class Code extends React.Component {
    componentDidMount() {
        this.props.addTooltip({
            title: 'Standalone Tooltips',
            text: '<h2 style="margin-bottom: 10px; line-height: 1.6">Now you can open tooltips independently!</h2>And even style them one by one!',
            selector: `.${this.props.classes.default} .${this.props.classes.tooltip}`,
            position: 'top',
            event: 'hover',
            style: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 0,
                color: '#fff',
                mainColor: '#ff67b4',
                textAlign: 'center',
                width: '29rem'
            }
        });
    }

    copyToClipboard(e) {
        const {LocalState, copyModalOpen} = this.props;

        const textarea = this.refs._gui_designer_textarea;
        const selection = textarea.selectionEnd;
        textarea.select();
        try {
            document.execCommand('copy');
            copyModalOpen();
        } catch (err) {
            alert('Failed! Use keyboard to copy/paste');
        }   
    }

    afterCopyModalOpen() {
        setTimeout(() => this.props.copyModalClose(), 1500);
    }

    render() {
        const {props} = this;
        const clipboard_classes = cx(this.props.classes.copy_to_clipboard, this.props.classes.button, this.props.classes.button_info);
        return (
            <div className={this.props.classes.default}>
                <textarea
                    ref='_gui_designer_textarea'
                    className={this.props.classes.textarea}
                    value={props.code}
                    readOnly={true}>
                </textarea>
                <button
                    className={clipboard_classes}
                    onClick={this.copyToClipboard.bind(this)}>
                    Copy to Clipboard&nbsp;&nbsp;<FontAwesome name='clipboard'/>
                </button>
                <Modal
                    isOpen={this.props.is_copy_modal_open}
                    onAfterOpen={this.afterCopyModalOpen.bind(this)}
                    onRequestClose={this.props.copyModalClose}
                    style={copyModalStyle}>
                    <FontAwesome name='check-circle-o'/>
                </Modal>
                <span className={this.props.classes.tooltip}><FontAwesome name='question-circle'/></span>
            </div>
        )
    }

    /*handleChange(event) {
      const {LocalState, CurrentApp, LastGoodCode} = this.props;
      let {value, selectionStart} = event.target;
      let node = ReactDOM.findDOMNode(this).firstChild;
      let scrollTop = node.scrollTop;

      try {
      let js_value = eval('(' + event.target.value + ')');

    // Now only format it as an object if it has actually changed from the old object.
    if (!_.isEqual(js_value, this.props.lastGoodCode)) {
    value = js_value;
    LocalState.set(LastGoodCode, value);
    }
    } catch (SyntaxError) {}

    LocalState.set(CurrentApp, value);

    setTimeout(() => {
    node.scrollTop = scrollTop
    node.setSelectionRange(selectionStart, selectionStart)
    });
    }*/
}

export default jss(stylesheet)(Code);
