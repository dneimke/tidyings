FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Install git
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git

# Set the user to root
USER root

# Ensure the workspace directory exists and has the correct permissions
RUN mkdir -p /workspaces/tidyings && chown -R node:node /workspaces/tidyings

# Switch back to the node user
USER node