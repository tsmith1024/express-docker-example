# Example of ExpressJS app running in Docker

## Building

`docker build .`

### OR

`docker-compose build app`

---

## Running (in development mode)

`docker-compose run app`

Also launches a container with a Postgres DB with some default settings, i.e. **NOT MEANT FOR PRODUCTION**. See the `docker-compose.yml` file for credentials and DB name.
