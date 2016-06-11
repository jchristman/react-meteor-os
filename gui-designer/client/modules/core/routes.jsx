import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from './containers/layouts.main.js';

export const nav_items = [
    {
        title: 'Generator',
        url: '/'
    },
];

export default function (injectDeps, context) {
    const MainLayoutCtx = injectDeps(MainLayout);

    let {FlowRouter} = context;

    _.each(nav_items, (item) => {
        FlowRouter.route(item.url, {
            name: item.title,
            action() {
                mount(MainLayoutCtx, {
                    context: context,
                });
            }
        });
    });
};
