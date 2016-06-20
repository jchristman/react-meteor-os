import React from 'react';
import t from 'tcomb-form';
import { Accounts } from 'meteor/accounts-base';

const Form = t.form.Form;

class LoginForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        if (this.props.login) {
            const value = this.refs.login.getValue();
            if (value) {
                Meteor.loginWithPassword(value.email, value.password, (err) => {
                    if (err) this.props.setError('Login Failed');
                });
            }
        } else {
            const value = this.refs.register.getValue();
            if (value) {
                Accounts.createUser({
                    email: value.email,
                    password: value.password1
                });
            }
        }
    }

    render() {
        if (this.props.login) {
            return (
                <div className={stylesheet.flexbox}>
                    <form onSubmit={this.submit}>
                        Login

                        <Form
                            ref="login"
                            type={LoginFormSchema}
                            options={LoginFormOptions}/>

                        { this.props.error.length > 0 ?
                            <span>{this.props.error}</span> :
                            null 
                        }

                        <button type="submit">Login</button>
                        <a onClick={this.props.toggleLoginOrRegister}>Register</a>
                    </form>
                </div>
            );
        } else {
            return (
                <div className={stylesheet.flexbox}>
                    <form onSubmit={this.submit}>
                        Register

                        <Form
                            ref="register"
                            type={RegisterFormSchema}
                            options={RegisterFormOptions}/>

                        { this.props.error.length > 0 ?
                            <span>{this.props.error}</span> :
                            null 
                        }

                        <button type="submit">Register</button>
                        <a onClick={this.props.toggleLoginOrRegister}>Login</a>
                    </form>
                </div>
            );
        }
    }
}

const stylesheet = cssInJS({
    flexbox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

const LoginFormLayout = (locals) => {
    return (
        <div>
            {locals.inputs.email}
            {locals.inputs.password}
        </div>
    );
}

const LoginFormSchema = t.struct({
    email: t.String,
    password: t.String
});

const LoginFormOptions = {
    auto: 'placeholders',
    template: LoginFormLayout,
    fields: {
        email: {
            type: 'email',
            attrs: {
                autoFocus: true
            }
        },
        password: {
            type: 'password'
        }
    }
}

const RegisterFormLayout = (locals) => {
    return (
        <div>
            {locals.inputs.email}
            {locals.inputs.password1}
            {locals.inputs.password2}
        </div>
    );
}

const RegisterFormSchema = t.refinement(t.struct({
    email: t.String,
    password1: t.String,
    password2: t.String
}), (locals) => locals.password1 === locals.password2);

const RegisterFormOptions = {
    auto: 'placeholders',
    error: 'Passwords must match',
    template: RegisterFormLayout,
    fields: {
        email: {
            type: 'email',
            attrs: {
                autoFocus: true
            }
        },
        password1: {
            type: 'password'
        },
        password2: {
            type: 'password'
        }
    }
}

export default LoginForm;
