Meteor OS
=========

This project is an adaptation of the original [MeteorOS](https://github.com/jchristman/meteor-os), changed from Blaze to React. This **should** make things much much better.

How to run
============

The current process to set this up is quite convoluted. You need to basically do this.

```bash
~ $ git clone https://git.christmanclan.com/josh/meteor-os.git
~ $ cd meteor-os
~/meteor-os $ npm install
~/meteor-os $ npm link
~/meteor-os $ cd ../test-app
~/test-app $ npm install
~/test-app $ npm link meteor-os
~/test-app $ meteor reset && meteor
```
