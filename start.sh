#!/bin/bash
echo "Checking for updates from github . . ."
git pull
echo "Starting application . . ."
node server.js
