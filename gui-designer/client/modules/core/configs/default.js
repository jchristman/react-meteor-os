import DefaultApp from '../../../configs/default_app.js';

export default ({LocalState, CurrentApp}) => {
    LocalState.setDefault(CurrentApp, DefaultApp);
}
