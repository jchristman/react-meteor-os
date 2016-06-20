import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import LoginForm from '../components/login_form.jsx';

// When true, login; else register
const loginOrRegister = '_meteor_os_login_or_register_state';
const loginError = '_meteor_os_login_error_msg';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    LocalState.setDefault(loginOrRegister, true);
    LocalState.setDefault(loginError, '');

    const login = LocalState.get(loginOrRegister);
    const toggleLoginOrRegister = () => LocalState.set(loginOrRegister, !login);
    const error = LocalState.get(loginError);
    const setError = (msg) => LocalState.set(loginError, msg);
    onData(null, { login, toggleLoginOrRegister, error, setError });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(LoginForm);
