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

    let code = LocalState.get(CurrentApp);
    let lastGoodCode = LocalState.get(LastGoodCode);
    
    if (typeof code === 'object') code = JSON.stringify(LocalState.get(CurrentApp), undefined, 4);
    
    onData(null, { code, lastGoodCode });
}

export default composeWithTracker(composer)(Code);
