#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
rm -rf /home/ubuntu/ci_cd_demo/

# clone the repo again
git clone https://github.com/aglasswala/Project-Granite.git

#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
source /home/ubuntu/.nvm/nvm.sh

# stop the previous pm2
pm2 kill
npm remove pm2 -g


#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
npm install pm2 -g
# starting pm2 daemon
pm2 status

cd /home/ubuntu/ci_cd_demo

#install npm packages
echo "Running npm install"
npm install

#Restart the node server
npm start
