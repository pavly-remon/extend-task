import {ReactNode} from "react";
import {Link, useLocation} from "react-router-dom";

type SideBarOptions = {
    children?: ReactNode;
    className?: string
}

export default function SideBar({children, className = ''}: SideBarOptions) {
    return (<ul className={className}>{children}</ul>
    );
}

type SideBarItemOptions = {
    href: string;
    className?: string;
    text: string;
}

function SideBarItem({href, className, text}: SideBarItemOptions) {
    const path = useLocation();

    return (<li className={`sideBarItem ${className} ${path.pathname === href ? 'active' : ''}`}>
        <Link to={href} className="flex items-center gap-4">
            {text && <p>{text}</p>}
        </Link>
    </li>)
}

SideBar.Item = SideBarItem;
