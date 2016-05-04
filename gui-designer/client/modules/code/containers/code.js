import {composeWithTracker} from 'react-komposer';

import Code from '../components/code.jsx';

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

const composer = (props, onData) => {
    const {LocalState, CurrentApp, LastGoodCode} = props;
    const CopyModal = '_gui_designer_copy_modal';
    LocalState.setDefault(CopyModal, false);

    let code = LocalState.get(CurrentApp);
    let lastGoodCode = LocalState.get(LastGoodCode);
    let copyModalIsOpen = LocalState.get(CopyModal);
    
    if (typeof code === 'object') code = JSON.stringify(LocalState.get(CurrentApp), undefined, 4);
    
    onData(null, { code, lastGoodCode, CopyModal, copyModalIsOpen });
}

export default composeWithTracker(composer)(Code);
