import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aside/Aside";

export default function Layout() {
  return (
   <>
   <Navbar/>
   <Aside/>
  <Outlet/>
   <Footer/>
   </>
  )
}
