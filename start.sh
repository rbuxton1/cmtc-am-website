#!/bin/bash
echo "Checking for updates from GitHub . . ."
git pull
echo "Checking for LFS updates from GitHub . . ."
git lfs pull
echo "Starting application . . ."
node server.js
