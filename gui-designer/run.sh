#!/bin/bash

npm link meteor-os
npm link react-context-menus
cp node_modules/meteor-os/meteor-os.css .
METEOR_SQLITE_JOURNAL_MODE=TRUNCATE MONGO_URL=mongodb://localhost:27017 meteor
