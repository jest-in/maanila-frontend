import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AdminLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
