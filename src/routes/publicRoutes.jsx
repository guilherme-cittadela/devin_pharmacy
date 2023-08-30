import { Route, Routes } from "react-router-dom";
import  { Login } from "../assets/pages/login"

function PublicRoutes () {
  return (
    <Routes>
      <Route path="/*" element={<Login />}/>
    </Routes>
  )
}

export { PublicRoutes }