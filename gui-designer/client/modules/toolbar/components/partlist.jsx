import React from 'react';
import JSONTree from 'react-json-tree';

import PartLabel from '../containers/part_label.js';

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
                <JSONTree
                    data={this.props.app}
                    labelRenderer={(...fullPath) => {
                        fullPath.reverse();
                        return ( <PartLabel path={fullPath.join('.')} node={fullPath[fullPath.length - 1]} LocalState={this.props.LocalState}/> )
                    }}
                    hideRoot={true}
                />
            </div>
        );
    }
}

export default Partlist;
