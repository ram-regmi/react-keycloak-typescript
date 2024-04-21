import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Secured from "../pages/SecuredPage"
import PrivateRoute from "../helpers/PrivateRoute"
import Nav from "../components/Nav";

function AppRouter() {
  return (
   <BrowserRouter>
   <Nav />
    <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route  path="/secured" element={<PrivateRoute><Secured /></PrivateRoute>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter