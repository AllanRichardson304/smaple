import { Header } from "../../shared/Header/Header"
import Sidebar from "../../shared/Sidebar/Sidebar"
import { Pagesrouter } from "../Pages/Pagesrouter"
import './Layout.scss';
export const Layout = () => {
  return (
    <>
    <div className="layout">
    <Sidebar></Sidebar>
      <div className="layout-inner">
      <Header></Header>
      <Pagesrouter></Pagesrouter>
      </div>
      </div>
    </>
  )
}

