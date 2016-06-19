import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import _ from 'underscore';

import MainLayout from './components/layouts.main.js';

export const routes = {
    Home:
        {
            url: '/'
        },
    Login:
        {
            url: '/login'
        }
};

export default function (injectDeps, context) {
    const MainLayoutCtx = injectDeps(MainLayout);
    const {FlowRouter} = context;

    _.each(_.keys(routes), (route) => {
        FlowRouter.route(routes[route].url, {
            name: route,
            action() {
                mount(MainLayoutCtx, {
                    context: context,
                });
            }
        });
    });
};
