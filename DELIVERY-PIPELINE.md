# Step-by-step

## NPM

```bash
#!/bin/bash
# Set NVM and NODE version
export NVM_DIR=/home/pipeline/nvm
export NODE_VERSION=9.7.1
export NVM_VERSION=0.33.8
# Update version
npm config delete prefix \
  && curl https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | sh \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v \
  && npm -v
# Install all node_modules and Angular CLI dependencies
npm install
# Archive node_modules folder
tar -czf node_modules.tar.gz node_modules
rm -rf node_modules 
```

## Run Unit Test & Integration Test

```bash
#!/bin/bash
# Set NVM and NODE version
export NVM_DIR=/home/pipeline/nvm
export NODE_VERSION=9.7.1
export NVM_VERSION=0.33.8
# Update version
npm config delete prefix \
  && curl https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | sh \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v \
  && npm -v
# Unarchive node_modules
tar -xzf node_modules.tar.gz
# Run Mocha & Chai test
npm test
```

## Deploy 

```bash
#!/bin/bash
cf push
```
