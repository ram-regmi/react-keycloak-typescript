# keycloak setup with docker

After writing `docker-compose.yml` file

```docker

version: '3.7'

services:

  keycloak:
    image: quay.io/keycloak/keycloak:24.0.3
    ports:
      - "8080:8080"
    environment:
      - KEYCLOAK_ADMIN=admin
      - KEYCLOAK_ADMIN_PASSWORD=admin
    command: ["start-dev"]
    
```

From the terminal run following command and press `enter`

```
    sudo docker-compose up -d
```
if container for keycloak already exists then run the following command to start that container
```
  sudo docker start container-name

```
`container-name`s can be seen by using `sudo docker ps -a`

![](./src/assets/dockerlist.png)

Here name of the docker container is `reactkeycloack-keycloak-1`

so, command to start if stopped and exists, it would be  `sudo docker start reactkeycloack-keycloak-1` 


### next

In the browser: type the following
```
    http://localhost:8080
```
Enter the admin credentials and log in -Eg: `{admin, admin}`

![](./src/assets/0.png)

create a new realm  -Eg:  `test-realm `

click on `keycloak` select menu then click on `create realm`

![](./src/assets/1.png)

create a new user inside that realm  -Eg: `testusername`

click on `Users` --> `create new user`  

![](./src/assets/2.png)

![](./src/assets/3.png)

setup the password for that user   -Eg: `testpassword`

click on `Credentials` --> ` set password `  

![](./src/assets/4.png)

![](./src/assets/5.png)

Goto 
```
    http://localhost:8080/realms/test-realm/account/
```
in the browser type 
```
    testusername

    testpassword
```

 as below and click on `Sign In`

![](./src/assets/9.png)

if setup is successful then,

![](./src/assets/10.png)

Now we are ready to connect keycloak to the react.