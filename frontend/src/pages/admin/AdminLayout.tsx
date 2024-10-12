import {FC} from "react";
import "../../styles/pages/Home.scss";
import {Outlet} from "react-router-dom";
import AppSideBar from "../../components/AppSideBar.tsx";

const AdminLayout: FC = () => {

    return <div className="admin-layout">
        <AppSideBar className={"side-bar"}/>
        <div className="w-full flex justify-center items-start p-4">
        <Outlet/>
        </div>
    </div>;
};

export default AdminLayout;