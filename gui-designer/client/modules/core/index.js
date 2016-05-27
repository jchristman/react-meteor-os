import routes from './routes.jsx';
import setDefaultState from './configs/default.js';

export default {
    routes,
    load(context) {
        setDefaultState(context);
    }
};
