import React from 'react';
import JSONTree from 'react-json-tree';

const stylesheet = cssInJS({
    default: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'black',

        textAlign: 'left',
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
