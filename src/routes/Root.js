import Header from "../components/header/header";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <Header/>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }