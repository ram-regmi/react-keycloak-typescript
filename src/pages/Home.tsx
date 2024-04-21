import { useKeycloak } from "@react-keycloak/web"
import reactLogo from "../assets/react.svg";
import keyCloakLogo from "/keycloak.svg";
import viteLogo from "/vite.svg";
function Home() {
  const {keycloak}=useKeycloak();
  return (
    <>
      {keycloak && keycloak.authenticated && (
        <div className="container mx-auto">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={keyCloakLogo} className="logo react" alt="React logo" />
          </a>
          <h1>Vite + React + KeyCloak</h1>
          <p>welcome {keycloak.tokenParsed?.given_name}</p>
        </div>
      ) }
    </>
  )
}

export default Home