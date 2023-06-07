import { Title } from "./Title.tsx";
import { posts } from "../data/posts.ts";
import { Link } from "react-router-dom";
import ArrowRight from "./Icons/ArrowRight.tsx";

function PopularContent() {

    return (
        <div className="space-y-6">
            <Title>Popular Content</Title>
            <ul className="space-y-2">
                {posts.map((post) =>
                    <li key={post.id}>
                        <Link className="relative group flex gap-3 items-center font-medium text-lg" to={post.slug}>
                            <ArrowRight className="absolute -left-8 group-hover:translate-x-1 stroke-blue-300 duration-200" />
                            {post.title}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default PopularContent