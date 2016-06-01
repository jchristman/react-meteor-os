import React from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import WindowLayoutDivider from './window_layout_divider.jsx';
import WindowLayoutLeaf from '../containers/window_layout_leaf.js';

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

class WindowLayout extends React.Component {
    componentDidMount() {
        this.props.connectDragPreview && this.props.connectDragPreview(getEmptyImage(), {});
    }

    renderLeafOrLayout(pane, actions, path) {
        if (pane.panes === undefined) {
            return (
                <WindowLayoutLeaf
                    actions={actions}
                    {...pane}
                    path={path}
                    layer_id={this.props.layer_id}
                    window_id={this.props.window_id}/>
            );
        } else {
            return (
                <WindowLayoutWrapper
                    actions={actions}
                    {...pane}
                    path={path}
                    layer_id={this.props.layer_id}
                    window_id={this.props.window_id}/>
            );
        }
    }

    render() {
        const {props} = this;
        const {panes, actions, path} = props;
        const {orientation, percentage} = panes;
        
        return (
            <div className={stylesheet.default}>
                <div style={get_pane1_style(orientation, percentage)}>
                    { this.renderLeafOrLayout(panes.pane1, actions, path + '.panes.pane1') }
                </div>

                <WindowLayoutDivider
                    orientation={orientation}
                    percentage={percentage}
                    connectDragSource={props.connectDragSource}
                    path={props.path}/>

                <div style={get_pane2_style(orientation, percentage)}>
                    { this.renderLeafOrLayout(panes.pane2, actions, path + '.panes.pane2') }
                </div>
            </div>
        );
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

const WindowLayoutWrapper = DragSource(type, spec, collect)(WindowLayout);
export default WindowLayoutWrapper;
