# ShoppingManager

The intent behind this project is an attempt to automate dominantly cyclic shopping as much as possible. Most commercial shopping centers now allow shopping online and at-store pickup. Walmart even has an API!

## High level use-case

Most people buy items in a cyclic manner. E.g: Paper towels once every two weeks, eggs every week, etc. The same items are typically bought (future expansion could include things like looking for cheaper alternatives, etc) within some period.

Users should be able to save items they buy frequently with (optional) information on frequency. Once it is time to shop again, users could rapidly select from their saved items to generate their new shopping list.

## Using

You'll need `node`, `npm` and `docker` installed. Installation varies depending on OS.

`docker-compose build` - build the containers (only necessary for first run or if code is modified)
`docker-compose up -d` - run the containers in detached mode.

The `docker-compose.yml` file is responsible for configuring how each container is spun up and setting up the environment to allow communication between containers.

| Server | Port and information |
|:---|:----|
| Express | Port 3000 - provides business layer; functions as any other RESTful JSON API. |
| Postgres | Port 8080 - database |

## Contributing

TBD

### Requirements

* Docker

## Trello Board

There's a trello board set up to manage this project. Message me if you'd like an invite to see the progress of this project or contribute to it.

## Tech Stack

TBD

## Copyright

TBD
