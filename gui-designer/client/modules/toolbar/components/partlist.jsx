import React from 'react';
import jss from 'react-jss';
import JSONTree from 'react-json-tree';

import PartLabel from '../containers/part_label.js';

const stylesheet = {
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
};

class Partlist extends React.Component {
    render() {
        return (
            <div className={this.props.classes.default}>
                <JSONTree
                    data={this.props.app}
                    labelRenderer={(...fullPath) => {
                        fullPath.reverse();
                        return ( <PartLabel
                                    path={fullPath.join('.')}
                                    node={fullPath[fullPath.length - 1]}
                                    LocalState={this.props.LocalState}
                                    CurrentApp={this.props.CurrentApp}
                                /> )
                    }}
                    hideRoot={true}
                />
            </div>
        );
    }
}

export default jss(stylesheet)(Partlist);
