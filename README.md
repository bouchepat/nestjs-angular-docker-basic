# Basic Setup: NestJS (Backend), Angular (Frontend), Docker, MySQL, and Redis

## Frameworks
1. **[MySQL](https://www.mysql.com/)**: MySQL is a widely used, open-source relational database management system (RDBMS). Known for its reliability and performance, MySQL is ideal for handling structured data and is a popular choice for web applications requiring complex queries, data integrity, and scalability.
2. **[Redis](https://redis.io/)**: Redis is an in-memory data structure store, often used as a database, cache, and message broker. It supports various data structures and is optimized for speed, making it highly effective for caching and real-time analytics where low-latency data retrieval is crucial.
3. **[Docker](https://docs.docker.com/)**: Docker is a platform that enables developers to create, deploy, and manage applications in lightweight, portable containers. Containers package an application with all its dependencies, ensuring it runs consistently across various environments, from local development to production servers.
4. **[NestJS](https://nestjs.com/) version 10**: NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. Based on TypeScript, it leverages a modular architecture and integrates seamlessly with modern JavaScript libraries, making it an excellent choice for building RESTful APIs, GraphQL services, and microservices.
5. **[Angular](https://angular.dev/) version 18**: Angular is a powerful front-end web application framework developed by Google. It provides a robust environment for building dynamic, single-page applications with a rich component architecture, declarative templates, and tools for efficient development, testing, and deployment.

## Prerequisites
1. **Docker**: Install [Docker](https://www.docker.com/) (recommended: [Docker Desktop](https://www.docker.com/products/docker-desktop/)), which provides container management tools.
2. **Angular CLI** (optional): Install the [Angular CLI](https://angular.dev/tools/cli) if you want to scaffold, develop, and maintain Angular applications directly from the command line.
3. **NestJS CLI** (optional): Install the [NestJS CLI](https://docs.nestjs.com/cli/overview) to initialize, develop, and maintain your Nest applications from the command line.

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:bouchepat/nestjs-angular-docker-basic.git
   ```

2. **Create the `.volumes` Folder**: Set up the following structure in a `.volumes` folder in the root directory:
    ```
    .volumes 
      ├── dumps             # Optional folder to create MySQL dumps 
      ├── mysql             # Folder containing MySQL database files 
      ├── redis             # Folder containing Redis data files 
      ├── secrets           # Folder for MySQL credentials 
      │ ├── mysql-root-pwd  # File containing the MySQL root password 
      │ ├── mysql-user-name # File containing the MySQL username 
      │ └── mysql-user-pwd  # File containing the MySQL user password 
      └── uploads           # Optional folder for file system assets
    ```

2. **Create an .env File for Docker***: In the .docker folder, create an .env file with the following variables:
    ```
      BUILDKIT_STEP_LOG_MAX_SIZE=50000000 # Increase log max size
      TZ=your_timezone                    # e.g.: "Canada/Pacific"
      USER=your_user                      # You username to setup paths
      REDIS_HOST=redis                    # Redis host
      REDIS_PORT=6379                     # Default redis port
      REDIS_PWD=redis_password            # Redis password
    ```

3. **Install NPM Dependencies**: Install dependencies for each part of the project:
    * **Backend**:
    ```bash
      cd backend
      npm i
    ``` 
    * **frontend**:
    ```bash
      cd frontend
      npm i
    ```
    * **Library** (custom library):
    ```bash
      cd lib
      npm i
    ```

4. **Run the Project**: Build and start the Docker containers:
    ```bash
      cd .docker
      docker-compose -f docker-compose.yml build
      docker-compose -f docker-compose.yml up
    ```        

5. **Verify the Setup**:
    * Open the frontend in a browser: http://localhost:4200 (Angular app)
    * Access the backend: http://localhost:5200 (NestJS API)

    **Both apps (frontend & backend) start in dev mode, meaning you can change a file in either app and the app will rebuild and reload.**

6. **Upcoming Features**:
    * Configure the backend to connect to the MySQL database
    * Enable Redis as a cache store in the backend
    * Add API routes to the backend
    * Integrate Firebase authentication in the frontend
    * Add basic routes to the frontend
    * Secure routes for authenticated users
    * Add frontend services for backend communication