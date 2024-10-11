import { FC } from "react";
import "../../styles/pages/Home.scss";
import {Outlet} from "react-router-dom";

const AdminLayout: FC = () => {

  return <div className="admin">
    <Outlet />
  </div>;
};

export default AdminLayout;