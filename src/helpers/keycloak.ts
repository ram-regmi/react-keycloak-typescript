import Keycloak from "keycloak-js";

const keycloakOptions = {
    url: "http://localhost:8080",
    realm: "whiteboard-realm",
    clientId: "react-app-client",
  };

  const keycloak = new Keycloak(keycloakOptions);


  // const initKeyCloak = async () => {
  //   try {
  //     await keycloak.init({ onLoad: "login-required" });
  //     if(keycloak.authenticated){
  //       console.log(keycloak);
        
  //     }
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // };
  // initKeyCloak();


  export default keycloak;