import { NavLink } from "react-router-dom";
import Moon from "./Icons/Moon.tsx";

function Navigation() {
    return (
        <div className="justify-between flex">
            <div className="flex items-center gap-5">
                <div className="text-xl font-bold text-neutral-900">
                    <img className="border-2 border-black w-20" src="/logo.png" alt=""/>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Tools
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Connect
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className="p-2 rounded-lg duration-200 bg-amber-100 hover:bg-amber-200 flex items-center justify-center">
                    <Moon />
                </button>
            </div>
        </div>
    )
}

export default Navigation