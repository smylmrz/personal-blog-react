import { Link } from "react-router-dom";

interface Props {
    content: string;
    to: string;
}

function Tag({ content, to }: Props) {
    return (
        <Link className="relative text-sm font-medium group flex items-center justify-center px-3 py-1" to={to}>
            <div className="absolute duration-200 w-full h-full group-hover:scale-110 group-hover:bg-blue-400 rounded-lg bg-blue-300 -z-10"/>
            {content}
        </Link>
    )
}

export default Tag