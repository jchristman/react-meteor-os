import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

class WindowResizer extends React.Component {
    componentDidMount() {
        this.props.connectDragPreview(getEmptyImage(), {});
    }

    render() {
        return this.props.connectDragSource(
            <div className={'resizer-' + this.props.which}></div>
        );
    }
};

export default WindowResizer;
