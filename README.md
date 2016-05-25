Meteor OS
=========

This project is an adaptation of the original [MeteorOS](https://github.com/jchristman/meteor-os), changed from Blaze to React. This **should** make things much much better.

How to run
============

The current process to set this up is quite convoluted. You need to basically do this.

```bash
~ $ npm install -g npm    # Make sure that NPM is up to date. This is important!
~ $ git clone https://git.christmanclan.com/josh/meteor-os.git
~ $ cd meteor-os/meteor-os
~/meteor-os/meteor-os $ npm install --only=dev
~/meteor-os/meteor-os $ npm link
~/meteor-os/meteor-os $ cd ../gui-designer
~/meteor-os/gui-designer $ npm install
~/meteor-os/gui-designer $ npm link meteor-os
~/meteor-os/gui-designer $ ln -s node_modules/meteor-os/bundle.css bundle.css
~/meteor-os/gui-designer $ meteor reset && meteor
```
