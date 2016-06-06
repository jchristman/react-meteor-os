import FontAwesome from 'react-fontawesome';
import _ from 'underscore';

const VFontAwesome = (props) => {
    const _props = _.omit(props, 'style');
    const {style={}} = props;
    _.extend(style, { verticalAlign: 'middle' });
    _.extend(_props, {style});

    return ( <FontAwesome {..._props}/> );
}

export default VFontAwesome;
