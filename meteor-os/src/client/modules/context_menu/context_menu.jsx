import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'react-menus';

const theme = {
    style: {
        zIndex: 10
    }
}

const id = '_meteor_os_context_menu_container';

const ContextMenu = (menu_items, options = {}) => {
    // Merge themes if they exist
    if (options.theme && options.theme.style) {
        for (let attrname in options.theme.style) {
            theme.style[attrname] = options.theme.style[attrname];
        }
    }

    return (ChildComponent) => {
        const Container = class extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.state = {
                    showContextMenu: false,
                    x: 0,
                    y: 0
                };

                // needed to add and remove event listeners....
                this.force_hide = this.force_hide.bind(this);
                this.hide = this.hide.bind(this);
            }

            componentDidMount() {
                this.container = ReactDOM.findDOMNode(this);

                // Note that we are not using .bind(this), because we need to remove
                // the listener later. The bind happens in the constructor
                if (document.addEventListener) {
                    document.addEventListener('click', this.force_hide, false);
                    document.addEventListener('contextmenu', this.hide, false);
                } else {
                    document.attachEvent('onclick', this.force_hide);
                    document.attachEvent('oncontextmenu', this.hide);
                }

                this._renderLayer();
            }

            componentDidUpdate() {
                this._renderLayer();
            }

            componentWillUnmount() {
                ReactDOM.unmountComponentAtNode(this.container);

                // Note that we are not using .bind(this), because we need to remove
                // the listener later. The bind happens in the constructor
                if (document.removeEventListener) {
                    document.removeEventListener('click', this.force_hide, false);
                    document.removeEventListener('contextmenu', this.hide, false);
                } else {
                    document.detachEvent('onclick', this.force_hide);
                    document.detachEvent('oncontextmenu', this.hide);
                }
            }

            _renderLayer() {
                if (this.state.showContextMenu) {
                    // First let's correct the menu_items to fix their onClick methods to be useful
                    let wrapped_menu_items = menu_items.map((item) => {
                        // Copy the item
                        let new_item = typeof item === 'object' ? _.extend({}, item) : item;
                        if (new_item.onClick !== undefined) new_item.onClick = (event, item_props, index) => { item.onClick(event, this.props, index) };
                        return new_item;
                    });
                    ReactDOM.render(<Menu theme={theme} items={wrapped_menu_items} at={[this.state.x, this.state.y]}/>, this.container);
                } else {
                    ReactDOM.unmountComponentAtNode(this.container);
                }
            }


            render() {
                return (
                    <ChildComponent
                        {...this.props}
                        show_context_menu={this.show.bind(this)}
                        hide_context_menu={this.hide.bind(this)}
                    />
                );
            }

            // ----- Context Menu Methods ----- //
            show(event) {
                event.preventDefault();
                event.stopPropagation();
                
                let bounds = event.target.getBoundingClientRect();
                let x = event.clientX - bounds.left;
                let y = event.clientY - bounds.top;

                const state = { x, y, showContextMenu: true };
                this.setState(state);
            }

            force_hide(event) {
                this.hide(event, true);
            }

            hide(event, force) {
                if (event.target !== ReactDOM.findDOMNode(this) || force) {
                    const state = { showContextMenu: false };
                    this.setState(state);
                }
            }
        }

        return Container;
    }
}

export default ContextMenu;
