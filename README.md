# Backend baas server
This project is an example of a simple backend server using parse-server with docker compose
is easy to install and you can start or stop the server using the commands of docker.

## Installation

This project require docker with docker compose, node.js and pnpm then you can run the following command

Install libraries
```
pnpm i
```

Build de project
```
pnpm build
```

Build and create the containers using docker
```sh
docker compose up --build --force-recreate
```
