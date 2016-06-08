// ----- External Imports ----- //
import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import cx from 'classnames';

// ----- Library Imports ----- //
import cancelBubble from '../lib/cancel_bubble.js';
import optionalWrapper from '../lib/optional_wrapper.js';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

class WindowTabbedTabbarTab extends React.Component {
    componentDidMount() {
        const {connectDragPreview = () => null} = this.props;
        connectDragPreview(getEmptyImage());
    }

    render() {
        const {props} = this;
        const tab_classes = cx(stylesheet.tab,
                               Themes.Default.primary_colors,
                               Themes.Default.primary_colors_focus,
                               props.checked && stylesheet.tab_checked);

        const label_classes = cx(stylesheet.label,
                                 Themes.Default.primary_colors_pseudo,
                                 !props.checked && Themes.Default.primary_box_shadow_pseudo,
                                 !props.checked && Themes.Default.primary_colors_hover,
                                 props.checked && stylesheet.label_checked);

        const connectContextMenu = props.connectContextMenu || optionalWrapper;
        const connectDragSource = props.connectDragSource || optionalWrapper;
        return connectDragSource(
            <div 
                className={tab_classes}>
                {
                    connectContextMenu(
                        <div
                            className={label_classes}
                            style={{ paddingTop: props.is_editing ? 2 : undefined }}
                            onMouseDown={cancelBubble}
                            onClick={() => props.check(props.index)}>
                            {
                                props.is_editing ?
                                    <input
                                        className={cx(Themes.Default.primary_font, Themes.Default.primary_font_size)}
                                        type='text'
                                        defaultValue={props.label}
                                        autoFocus={true}
                                        onFocus={(e) => e.target.select()}
                                        onChange={props.setLabel}
                                        onKeyPress={props.handleKeyPress}
                                    /> :
                                    props.label
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

const stylesheet = cssInJS({
    tab: {
        float: 'left',
        height: 'auto',
        width: 'auto',
        marginTop: 5,
        marginLeft: 5,

        borderWidth: 1,
        borderStyle: 'solid',
        borderBottom: 'none',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    tab_checked: {
        backgroundColor: 'white',
        zIndex: 2,
    },

    label: {
        position: 'relative',
        padding: 5,
        cursor: 'pointer',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,

        ':before': {
            position: 'absolute',
            bottom: 1,
            left: -6,
            width: 5,
            height: 5,
            content: " ",

            borderTopWidth: 0,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0,
            borderStyle: 'solid',

            borderBottomRightRadius: 5,
        },

        ':after': {
            content: ' ',
            position: 'absolute',
            bottom: 1,
            right: -6,
            width: 5,
            height: 5,

            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderStyle: 'solid',
            
            borderBottomLeftRadius: 5,
        }
    },

    label_checked: {
        zIndex: 2,
        backgroundColor: 'white',

        ':before': {
            boxShadow: '2px 2px 0 white'
        },

        ':after': {
            boxShadow: '-2px 2px 0 white'
        }
    }
});

export default WindowTabbedTabbarTab;
