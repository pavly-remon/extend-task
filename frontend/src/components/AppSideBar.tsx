import SideBar from "./SideBar";
import {useSelector} from "react-redux";

export default function AppSideBar({className = ''}) {
    const auth = useSelector((state: any) => state.auth)
    console.log(auth)
    return (
        <div className={`${className} bg-primary w-full min-h-screen h-full flex flex-col justify-start items-center`}>
            <SideBar className="w-full flex flex-col items-start mt-10">
                <SideBar.Item href="/admin" text="Create Product"/>
                <SideBar.Item href="/admin/edit" text="Edit | Delete Product"/>
                <SideBar.Item href="/" text="Go to Store"/>
            </SideBar>
        </div>
    );
}