import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';

import global_styles from '../../../configs/global-css.js';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 'calc(100% - 300px)',
        bottom: -2,
        left: -2,
        right: 'calc(300px - 2px)',

        backgroundColor: 'white',

        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid'
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
        right: 10,
    }
});

class Code extends React.Component {
    copyToClipboard(e) {
        const textarea = this.refs._gui_designer_textarea;
        const selection = textarea.selectionEnd;
        textarea.select();
        try {
            document.execCommand('copy');
            node.setSelectionRange(selection, selection)
            alert('Copied!')
        } catch (err) {
            alert('Failed! Use keyboard to copy/paste');
        }   
    }

    render() {
        const {props} = this;
        const clipboard_classes = cx(stylesheet.copy_to_clipboard, global_styles.button, global_styles.button_info);
        return (
            <div className={stylesheet.default}>
                <textarea
                    ref='_gui_designer_textarea'
                    className={stylesheet.textarea}
                    value={props.code}
                    readOnly={true}>
                </textarea>
                <button
                    className={clipboard_classes}
                    onClick={this.copyToClipboard.bind(this)}>
                        Copy to Clipboard&nbsp;&nbsp;<FontAwesome name='clipboard'/>
                </button>
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

export default Code;
