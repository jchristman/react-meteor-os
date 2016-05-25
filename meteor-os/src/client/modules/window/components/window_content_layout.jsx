import React from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import WindowContentLayoutDivider from './window_content_layout_divider.jsx';
import WindowContentLayoutLeaf from '../containers/window_content_layout_leaf.js';

import {dividerType} from '../configs/drag_types.js';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    }
});

const get_pane1_style = (orientation, percentage) => {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 'calc(100% - ' + percentage + '% + 4px)',
            zIndex: 2
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 'calc(100% - ' + percentage + '% + 4px)',
            bottom: 0,
            zIndex: 2
        };
    }
}

const get_pane2_style = (orientation, percentage) => {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 'calc(' + percentage + '% + 4px)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 'calc(' + percentage + '% + 4px)',
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    }
}

class WindowContentLayout extends React.Component {
    componentDidMount() {
        this.props.connectDragPreview && this.props.connectDragPreview(getEmptyImage(), {});
    }

    render() {
        const {props} = this;
        
        const panes = props.panes || (props.layout && props.layout.panes);
        const path = props.path || (props.layout && 'layout');

        if (panes === undefined) { // Then we are a leaf!
            const content = props.content || (props.layout && props.layout.content);
            const content_type = props.content_type || (props.layout.content_type);
            const leaf_type = props.leaf_type || (props.layout.leaf_type);
            return (
                <WindowContentLayoutLeaf
                    path={path}
                    content={content}
                    content_type={content_type}
                    leaf_type={leaf_type}
                    splitH={props.splitH}
                    splitV={props.splitV}
                    moveDivider={props.moveDivider}
                />
            );
        } else {
            const {orientation, percentage} = panes;
            return (
                <div className={stylesheet.default}>
                    <div
                        style={get_pane1_style(orientation, percentage)}>
                            <WindowContentLayoutWrapper
                                {...panes.pane1}
                                splitV={props.splitV}
                                splitH={props.splitH}
                                moveDivider={props.moveDivider}
                                path={path + '.panes.pane1'}
                                LocalState={props.LocalState}/>
                    </div>
                    <WindowContentLayoutDivider
                        orientation={orientation}
                        percentage={percentage}
                        connectDragSource={this.props.connectDragSource}
                        path={path}/>
                    <div
                        style={get_pane2_style(orientation, percentage)}>
                            <WindowContentLayoutWrapper
                                {...panes.pane2}
                                splitV={props.splitV}
                                splitH={props.splitH}
                                moveDivider={props.moveDivider}
                                path={path + '.panes.pane2'}
                                LocalState={props.LocalState}/>
                    </div>
                </div>
            );
        }
    }
}

const type = () => dividerType;

const spec = {
    beginDrag(props, monitor, component) {
        return {...props, parent: ReactDOM.findDOMNode(component), dragType: dividerType};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

const WindowContentLayoutWrapper = DragSource(type, spec, collect)(WindowContentLayout);
export default WindowContentLayoutWrapper;
