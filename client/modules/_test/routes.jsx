import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from './components/layouts.main.jsx';
import ApplicationManager from '../application-manager/containers/collection-wrapper.js';

export const nav_items = [
    {
        title: 'Test',
        url: '/',
        content: (context) => ( <ApplicationManager {...context}/> )
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
                    content: () => item.content(context)
                });
            }
        });
    });
};
