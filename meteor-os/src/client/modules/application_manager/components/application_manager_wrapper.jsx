import CollectionWrapper from '../containers/collection_wrapper.js';
import LocalStateWrapper from '../containers/local_state_wrapper.js';

const wrapper_type_switch = (props) => {
    switch(props.wrapper) {
        case 'collection':
            return ( <CollectionWrapper {...props}/> );
        case 'state':
            return ( <LocalStateWrapper {...props}/> );
        default:
            throw new Error('Unsupported wrapper type: ' + props.wrapper);
            return ( <div>Unsupported wrapper type: {props.wrapper}</div> );
    }
}

const ApplicationManagerWrapper = (props) => {
    return wrapper_type_switch(props);
}

export default ApplicationManagerWrapper;
