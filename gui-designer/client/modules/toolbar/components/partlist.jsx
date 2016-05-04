import React from 'react';
import JSONTree from 'react-json-tree';

const stylesheet = cssInJS({
    default: {
        flex: 1,
        
        width: '100%',

        marginTop: 10,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'black',

        textAlign: 'left',
        overflowY: 'scroll'
    }
});

class Partlist extends React.Component {
    render() {
        return (
            <div className={stylesheet.default}>
                <JSONTree data={this.props.app}/>
            </div>
        );
    }
}

export default Partlist;
