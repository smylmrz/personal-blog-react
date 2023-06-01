import { Link } from "react-router-dom";
import { Post as PostType } from "../types/Post.ts";

interface Props {
    post: PostType
}

function Post({ post }: Props) {
    return (
        <Link className="group block" to={post.slug}>
            <h2 className="mb-1 group-hover:text-amber-400 duration-200 text-xl font-bold">
                {post.title}
            </h2>
            <h4 className="mb-3 text-lg font-medium text-neutral-600">{post.subtitle}</h4>
            <p className="mb-4 leading-relaxed">{post.content}</p>
            <div className="font-bold">Read more</div>
        </Link>
    )
}

export default Post