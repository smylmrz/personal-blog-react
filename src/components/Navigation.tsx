import { Link, NavLink } from "react-router-dom";
import Moon from "./Icons/Moon.tsx";
import { useState } from "react";
import { categories } from "../data/categories.ts";
import { Category } from "../types/Category.ts";
import Times from "./Icons/Times.tsx";

function Navigation() {
    interface NavigationLink {
        name: string
        slug?: string
        links?: NavigationLink[] | Category[]
    }

    const links: NavigationLink[] = [
        {
            name: "Home",
            slug: "",
        },
        {
            name: "Latest",
            slug: "latest",
        },
        {
            name: "Topics",
            links: categories
        }
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="px-5 lg:px-0 flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div>
                    <Link to="/">
                        <img className="border-2 border-black w-20" src="/logo.svg" alt=""/>
                    </Link>
                </div>
                <ul className="hidden lg:flex gap-5">
                    {links.map(link => (
                        <li key={link.name}>
                            <NavLink to={link.slug ?? "/"}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="hidden lg:flex p-2 rounded-lg duration-200 bg-blue-100 hover:bg-blue-200  items-center justify-center">
                <Moon />
            </button>

            <button onClick={() => setIsOpen(true)} className="flex flex-col gap-2 lg:hidden">
                <span className="w-8 rounded-md h-1 bg-neutral-900"></span>
                <span className="w-8 rounded-md h-1 bg-neutral-900"></span>
            </button>

            <div className={
                `fixed duration-100 p-5 lg:hidden w-full h-screen z-10 top-0 bg-white/5 backdrop-blur-3xl 
                ${isOpen ? 'left-0' : '-left-full'}`
            }>
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img className="border-2 border-black w-20" src="/logo.png" alt=""/>
                    </Link>
                    <button className="flex justify-center items-center w-8 h-8" onClick={() => setIsOpen(false)}>
                        <Times />
                    </button>
                </div>
                <ul className="mt-10 space-y-5">
                    {links.map(link => (
                        <li key={link.name}>
                            <NavLink className="font-bold text-2xl" to={link.slug ?? '/'}>
                                {link.name}
                            </NavLink>
                            {link.links?.length && <ul className="space-y-2 pt-2 pl-5">
                                {link.links?.map(link => <li key={link.name}>
                                        <NavLink className="font-medium text-xl" to={link.slug ?? '/'}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                )}
                            </ul>}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navigation