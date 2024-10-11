import {FC} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";

const RootLayout: FC = () => {
    return (<>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;
