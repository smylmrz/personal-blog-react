import { categories } from "../data/categories.ts";
import { Link } from "react-router-dom";
import { socials } from "../data/socials.ts";

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-10">
            <div className="container px-5 lg:px-0 mx-auto">
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">

                    <div className="flex text-center lg:text-left flex-col justify-between">
                        <div className="space-y-3">
                            <div className="mx-auto lg:mx-0 w-24">
                                <img className="border-2 border-black w-full" src="/logo.svg" alt=""/>
                            </div>
                            <p className="font-medium">
                                What you see here, stays here.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm">&copy; 2023 Ismayil Mirzayev. All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-40">
                        <div className="text-center lg:text-left space-y-3">
                            <h4 className="font-medium text-lg">Topics</h4>

                            <ul className="text-sm space-y-2">
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <Link to={`/category/${category.slug}`}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center lg:text-left space-y-3">
                            <h4 className="font-medium text-lg">Let's connect</h4>

                            <ul className="text-sm space-y-2">
                                {socials.map(social => (
                                    <li key={social.id}>
                                        <a target="_blank" href={social.to}>
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer